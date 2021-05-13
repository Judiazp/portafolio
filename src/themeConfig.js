import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    secondary: {
      light: "rgba(48, 49, 53, 1)",
      main: "rgba(7, 9, 15, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff",
    },
    primary: {
      main: "#17d0d5",
      contrastText: "#fff",
    },
  },
});
