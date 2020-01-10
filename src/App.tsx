import React from "react";

import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  Box,
  Container,
  Button
} from "@material-ui/core";
import { grey, purple } from "@material-ui/core/colors";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import RandomSentence from "./page/RandomSentence";
import AlertError from "./components/AlertError";
import Test from "./components/Test";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
      contrastText: "#fff"
    },
    text: {
      primary: purple["A700"],
      secondary: "#fff"
    },
    secondary: {
      main: purple["A700"],
      contrastText: "#000"
    },
    background: {
      default: "#222222"
    }
  },
  typography: {
    subtitle1: {
      fontStyle: "italic"
    }
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 2
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Router>
          <Switch>
            <Route path="/randomWord">
              <RandomSentence />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <p>go to :</p>
              <Button>
                <Link to="/randomword">go</Link>
              </Button>
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}
