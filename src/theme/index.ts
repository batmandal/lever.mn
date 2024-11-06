import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E2E2E2",
      contrastText: "#fff",
      light: "#EFF3FE",
      dark: "#276EF1",
    },
    text: {
      primary: "#6B6B6B",
      secondary: "#141414",
    },
    background: {
      default: "#F6F6F6",
      paper: "#FFFFFF",
    },
    success: {
      main: "#276EF1",
    },
  },
});
