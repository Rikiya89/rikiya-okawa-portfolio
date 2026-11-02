export default function NotFound() {
  return (
    <main id="main" className="page-grid min-h-[100svh] flex flex-col items-start justify-center gap-6">
      <h1 className="type-display text-[32vw] md:text-[220px] text-ink">404</h1>
      <p className="border-t border-ink pt-3 w-full max-w-[520px] text-[15px] text-ink-2 text-jp-wrap">お探しのページは見つかりませんでした。</p>
      <a
        href="/jp"
        className="button-primary px-6 py-3 min-h-[48px]"
      >
        トップへ戻る
      </a>
    </main>
  );
}
