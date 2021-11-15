import { KeyboardArrowUp } from "@mui/icons-material";
import { createTheme, CssBaseline, Fab, ThemeProvider } from "@mui/material";
import React from "react";
import Featured from "../../components/Featured/Featured";
import Products from "../../components/Products/Products";
import ReviewCollection from "../../components/ReviewCollection/ReviewCollection";
import Navigation from "../../components/shared/Navigation/Navigation";
import ScrollToTop from "./ScrollToTop";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#8b9b9b",
      main: "#42464b",
      dark: "#212529",
      contrastText: "#ffecb3",
    },
    secondary: {
      light: "#026482",
      main: "#376a99",
      dark: "#210139",
      contrastText: "#fff",
    },
    warning: {
      main: "#660024",
      light: "#d35561",
      dark: "#560000",
    },
    info: {
      main: "#c6b7a8",
      light: "#9ab3ca",
      dark: "#333333",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Nunito", "Playfair Display", "sans-serif"].join(
      ","
    ),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

const Home = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Navigation />

        <Featured />

        <Products />
        <ReviewCollection />
        <ScrollToTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollToTop>
      </div>
    </ThemeProvider>
  );
};

export default Home;
