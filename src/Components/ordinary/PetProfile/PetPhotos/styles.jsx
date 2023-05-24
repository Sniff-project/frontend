export const carouselStyles = {
  width: "100%",
  height: "100%",
  "> div div": {
    width: "inherit",
    height: "inherit",
  },
  ":hover": {
    button: {
      opacity: 0.75,
      background: "transparent!important",
    },
  },
  button: {
    top: "0!important",
    opacity: 0.5,
    background: "transparent",
    margin: 0,
    height: "100%",
    ":hover": {
      opacity: 1,
    },
    svg: {
      fontSize: "3rem",
    },
  },
  'button[aria-label="Next"]': {
    borderRadius: "0 10px 10px 0",
  },
  'button[aria-label="Previous"]': {
    borderRadius: "10px 0 0 10px",
  },
};
