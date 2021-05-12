import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    common: { black: "rgba(7, 9, 15, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    secondary: {
      light: "rgba(48, 49, 53, 1)",
      main: "rgba(7, 9, 15, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff",
    },
    primary: {
      light: "#17d0d5",
      main: "rgba(53, 206, 141, 1)",
      dark: "rgba(0, 156, 95, 1)",
      contrastText: "rgba(7, 9, 15, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(7, 9, 15, 1)",
      secondary: "rgba(7, 9, 15, 0.71)",
      disabled: "rgba(7, 9, 15, 0.51)",
      hint: "rgba(7, 9, 15, 0.34)",
    },
  },
});
