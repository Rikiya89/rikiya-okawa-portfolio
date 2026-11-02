// Restrained entrance motion: short travel, no bounce. Same API as before.
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const TRAVEL = 16;

export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -TRAVEL, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay * 0.5,
          duration: 0.6,
          ease: EASE_OUT,
        },
      },
    };
  }

  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: TRAVEL, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay * 0.5,
          duration: 0.6,
          ease: EASE_OUT,
        },
      },
    };
  }

  export const slideInFromTop = {
    hidden: { y: -TRAVEL / 2, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: EASE_OUT,
      },
    },
  };
