// TypeScript declarations for React Three Fiber JSX elements
// This extends the JSX namespace to include Three.js elements

import type { ThreeElements } from '@react-three/fiber'

declare global {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements { }
    }
}

export { }
