import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AuthProvider from "./context/AuthProvider";
import ScrollTop from "./hooks/scrollTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExploreAll from "./pages/ExploreAll/ExploreAll";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/SignUp/PrivateRoute/PrivateRoute";
import SignIn from "./pages/SignUp/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            border: "5px solid transparent",
            borderRadius: "100px",
            backgroundColor: "#8070d4",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            backgroundColor: "#e4e4e4",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#6252cb",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#6252cb",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#6252cb",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },

  palette: {
    primary: {
      light: "#5a477f",
      main: "#361a59",
      dark: "#210038",
      contrastText: "#ffecb3",
    },
    secondary: {
      main: "#19283f ",
      light: "#af5c59",
      dark: "#af5c59",
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

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Router>
            <ScrollTop />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Switch>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/product/:id">
                <SingleProduct />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/explore">
                <ExploreAll />
              </Route>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="/register">
                <SignUp />
              </Route>

              {/*404           */}

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
