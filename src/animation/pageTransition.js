const pageTransition = {
  initial: { opacity: 0, y: 10 }, // Start slightly transparent and lower
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10, // Fade out and move slightly up
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default pageTransition;
