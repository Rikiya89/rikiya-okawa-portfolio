"use client";

// Flower-of-Life hero field, drawn with raw WebGL (no three.js): one full-screen
// triangle + the fragment shader in flowerField.glsl.ts.
import React, { useEffect, useRef, useState, type RefObject } from "react";
import { flowerFrag, flowerVert } from "./flowerField.glsl";

type PointerState = {
  tx: number;
  ty: number;
  sx: number;
  sy: number;
  lastMove: number;
};

type FlowerLayout = {
  cx: number;
  cy: number;
  r0: number;
  opacity: number;
};

type Props = {
  sectionRef: RefObject<HTMLElement | null>;
  anchorRef?: RefObject<HTMLElement | null>;
};

const WIDE_ASPECT = 1.2;
const RING_EXTENT = 3.12;
const FIT_MARGIN = 0.04;
const COLUMN_SPILL = 1.6;
const CENTERED: FlowerLayout = { cx: 0, cy: 0, r0: 0.3, opacity: 0.32 };

const sameLayout = (a: FlowerLayout | null, b: FlowerLayout) =>
  !!a && a.cx === b.cx && a.cy === b.cy && a.r0 === b.r0 && a.opacity === b.opacity;

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl");
    if (!context) return false;
    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
};

const compile = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("[FlowerField]", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

export default function FlowerField({ sectionRef, anchorRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [layout, setLayout] = useState<FlowerLayout | null>(null);
  const [epoch, setEpoch] = useState(0); // bumped on WebGL context restore
  // Phones show the flower as a faint watermark behind text; full DPR buys nothing there.
  const [maxDpr] = useState(() => (window.matchMedia("(max-width: 767px)").matches ? 1.25 : 1.75));

  const pointer = useRef<PointerState>({ tx: 10, ty: 10, sx: 10, sy: 10, lastMove: -Infinity });
  // Mirrors of state read inside the render loop, plus a hook to re-sync it.
  const layoutRef = useRef<FlowerLayout | null>(null);
  const reducedRef = useRef(false);
  const visibleRef = useRef(true);
  const syncRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setSupported(hasWebGL());
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    const section = sectionRef.current;
    const anchor = anchorRef?.current;
    if (!section || !anchor) return;
    const update = (next: FlowerLayout) => setLayout((prev) => (sameLayout(prev, next) ? prev : next));
    const measure = () => {
      const s = section.getBoundingClientRect();
      const a = anchor.getBoundingClientRect();
      const size = Math.min(parseFloat(getComputedStyle(anchor).minHeight), COLUMN_SPILL * a.width);
      const m = Math.min(s.width, s.height);
      const cy = (s.height - 2 * (a.top - s.top + a.height / 2)) / m;
      const r0 = Math.min(
        size / (RING_EXTENT * m),
        (s.height / m - Math.abs(cy) - FIT_MARGIN) / RING_EXTENT,
      );
      if (!(r0 > 0)) {
        update(CENTERED);
        return;
      }
      const cx = Math.min(
        (2 * (a.left - s.left + a.width / 2) - s.width) / m,
        s.width / m - RING_EXTENT * r0 - FIT_MARGIN,
      );
      update({ cx, cy, r0, opacity: 1 });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    observer.observe(anchor);
    if (anchor.parentElement) observer.observe(anchor.parentElement);
    return () => observer.disconnect();
  }, [sectionRef, anchorRef]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    const handleMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const m = Math.min(rect.width, rect.height);
      pointer.current.tx = (2 * x - rect.width) / m;
      pointer.current.ty = (2 * (rect.height - y) - rect.height) / m;
      pointer.current.lastMove = performance.now();
    };
    section.addEventListener("pointermove", handleMove);
    return () => section.removeEventListener("pointermove", handleMove);
  }, [sectionRef, reducedMotion]);

  // Keep loop-visible mirrors current and let the renderer react.
  useEffect(() => {
    layoutRef.current = layout;
    reducedRef.current = reducedMotion;
    visibleRef.current = visible;
    syncRef.current?.();
  }, [layout, reducedMotion, visible]);

  // Renderer
  useEffect(() => {
    if (!supported) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false, stencil: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, flowerVert);
    const fs = compile(gl, gl.FRAGMENT_SHADER, flowerFrag);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("[FlowerField]", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const u = {
      time: gl.getUniformLocation(program, "uTime"),
      res: gl.getUniformLocation(program, "uRes"),
      pointer: gl.getUniformLocation(program, "uPointer"),
      strength: gl.getUniformLocation(program, "uPointerStrength"),
      opacity: gl.getUniformLocation(program, "uOpacity"),
      center: gl.getUniformLocation(program, "uCenter"),
      r0: gl.getUniformLocation(program, "uR0"),
    };

    const st = { time: 0, strength: 0, raf: 0, last: 0, cssW: 1, cssH: 1, lost: false };

    const applyLayout = () => {
      const aspect = st.cssW / st.cssH;
      const wide = aspect > WIDE_ASPECT;
      const l = layoutRef.current;
      if (l) {
        gl.uniform2f(u.center, l.cx, l.cy);
        gl.uniform1f(u.r0, l.r0);
        gl.uniform1f(u.opacity, l.opacity);
      } else {
        gl.uniform2f(u.center, wide ? 0.45 * aspect : 0, 0);
        gl.uniform1f(u.r0, wide ? 0.28 : 0.3);
        gl.uniform1f(u.opacity, wide ? 1.0 : 0.32);
      }
    };

    const resize = () => {
      const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1), maxDpr);
      st.cssW = Math.max(1, canvas.clientWidth);
      st.cssH = Math.max(1, canvas.clientHeight);
      const w = Math.round(st.cssW * dpr);
      const h = Math.round(st.cssH * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(u.res, w, h);
      applyLayout();
    };

    const draw = () => {
      if (st.lost) return;
      const p = pointer.current;
      gl.uniform1f(u.time, st.time);
      gl.uniform2f(u.pointer, p.sx, p.sy);
      gl.uniform1f(u.strength, st.strength);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const frame = (now: number) => {
      const dt = st.last ? Math.min((now - st.last) / 1000, 0.1) : 0;
      st.last = now;
      st.time += dt;
      const p = pointer.current;
      const k = 1 - Math.exp(-10 * dt);
      p.sx += (p.tx - p.sx) * k;
      p.sy += (p.ty - p.sy) * k;
      const target = performance.now() - p.lastMove < 1500 ? 1 : 0;
      st.strength += (target - st.strength) * (1 - Math.exp(-6 * dt));
      draw();
      st.raf = requestAnimationFrame(frame);
    };

    // Animate while on screen; reduced motion renders a single still frame at t = 0.
    const sync = () => {
      applyLayout();
      const animate = !reducedRef.current && visibleRef.current && !st.lost;
      if (reducedRef.current) {
        st.time = 0;
        st.strength = 0;
      }
      if (animate && !st.raf) {
        st.last = 0;
        st.raf = requestAnimationFrame(frame);
      } else if (!animate && st.raf) {
        cancelAnimationFrame(st.raf);
        st.raf = 0;
      }
      if (!animate) draw();
    };

    // Resizing the canvas clears its (opaque) drawing buffer; repaint in the same
    // frame so the cleared black buffer is never composited.
    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);

    const onLost = (e: Event) => {
      e.preventDefault();
      st.lost = true;
      cancelAnimationFrame(st.raf);
      st.raf = 0;
    };
    const onRestored = () => setEpoch((n) => n + 1);
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);

    resize();
    syncRef.current = sync;
    sync();

    return () => {
      syncRef.current = null;
      cancelAnimationFrame(st.raf);
      observer.disconnect();
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [supported, maxDpr, epoch]);

  if (!supported) return null;

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
