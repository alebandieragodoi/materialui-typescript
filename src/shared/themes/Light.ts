import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: yellow[500],
      main: yellow[700],
      dark: yellow[800],

      contrastText: "#fffffff",
    },

    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fffffff",
    },

    background: {
      paper: "#ffffff",
      default: "#f76f3",
    },
  },
});
