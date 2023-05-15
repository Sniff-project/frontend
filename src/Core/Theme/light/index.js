import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#e8ebf2",
      blue: "rgba(150, 198, 255, 0.26)"
    },
    primary: {
      main: "#48a0d1",
      hover: "#63aed8",
      shadow: "rgba(72, 160, 209, 0.5)"
    },
    error: {
      main: "#e41749",
      shadow: "rgb(228 23 73 / 80%)",
      textColor: "rgba(255, 255, 255, 0.253)"
    },
    success: {
      main: "#1de9b6",
      shadow: "rgb(29 233 182 / 80%)",
      textColor: "rgba(255, 255, 255, 0.253)"
    },
    black: {
      main: "#000000",
      secondary: "#2E2C34",
      opacity05: "rgba(0, 0, 0, .5)",
      opacity025: "rgba(0,0,0,.25)"
    },
    grey: {
      main: "#587081"
    },
    white: {
      main: "#ffffff",
      opacity: "rgba(255, 255, 255, 0.253)"
    }
  },
  typography: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: 400,
    h1: {
      fontSize: "1.875rem",
      lineHeight: "2.3125rem",
      fontWeight: 400,
      margin: "0",
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
      fontWeight: 400,
      margin: "0",
    },
    h3: {
      fontSize: "1.17rem",
      lineHeight: "1.875rem",
      fontWeight: 400,
      margin: "0",
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
      margin: "0",
    },
    h5: {
      fontSize: "0.83rem",
      lineHeight: "1.25rem",
      fontWeight: 400,
      margin: "0",
    },
    h6: {
      fontSize: "0.67rem",
      lineHeight: "1rem",
      fontWeight: 400,
      margin: "0",
    },
    fontSize: 16,
    lineHeight: "1.25rem",
    textTransform: "none",
  },
  spacing: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
});

export default theme;