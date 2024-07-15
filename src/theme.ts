import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#03D69D",
    },
    secondary: {
      main: "#133A6F",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#4D4D4D",
      secondary: "#B2B2B2",
    },
    info: {
      main: "#E5E5E5",
    }
    
  },
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

export default theme;