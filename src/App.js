import { createTheme, ThemeProvider } from "@mui/material";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff8abd",
      main: "#f17674",
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
      light: "#c6b7a8",
      dark: "#990036",
    },
    info: {
      main: "#846ff4",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>

            {/*           
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
