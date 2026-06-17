// Featured Card
export const featuredCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -4,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.2, when: "beforeChildren", staggerChildren: 0.2 },
  },
};
export const imageVariants = {
  hidden: { scale: 1 },
  visible: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 0 }, // was y: -20
};

// Filtered Card
export const filteredCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const filteredImageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4 } },
};

export const searchCardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const searchListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const searchPageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const searchArrowVariants = {
  rest: { opacity: 0, x: -4 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};
export const searchBarVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const searchCountVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.1 },
  },
};
export const previewCardVariants = (index: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  },
  hover: {
    y: -4,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.2 },
  },
});