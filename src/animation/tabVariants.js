export const tabContentVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // Custom smooth decelerating curve
    },
  },
  exit: {
    opacity: 0,
    y: 0, // Keep y at 0 on exit to prevent jarring jumps
    transition: {
      duration: 0.15, // Fast exit so the wait time isn't annoying
      ease: "easeIn",
    },
  },
};
