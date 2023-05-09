import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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
    white: {
      main: "#ffffff",
      opacity: "rgba(255, 255, 255, 0.253)"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "20px",
    textTransform: "none",
  },
  spacing: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
});

export default theme;