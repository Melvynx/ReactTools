import React from "react";

import { CssBaseline, ThemeProvider, createMuiTheme, Container } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RandomSentence from "./page/RandomSentence";
import HomePage from "./page/HomePage";
import BaseCalculator from "./page/BaseCalculator";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple["A700"],
      contrastText: "#000"
    },
    text: {
      primary: purple["A700"],
      secondary: "#fff"
    },
    secondary: {
      main: "#222222",
      contrastText: "#fff"
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
            <Route path="/transform">
              <BaseCalculator />
            </Route>
            <Route path="/test"></Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}
