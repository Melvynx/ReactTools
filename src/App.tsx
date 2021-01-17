import React from 'react';

import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  Box,
  responsiveFontSizes,
} from '@material-ui/core';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import RandomSentence from './page/RandomSentence';
import HomePage from './page/HomePage';
import BaseCalculator from './page/BaseCalculator';
import GitHubPages from './page/GitHubPages';
import Footer from './components/App/Footer';
import Forum from './page/Forum';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#bb87fa',
      contrastText: '#000',
    },
    secondary: {
      main: '#1ddac6',
      contrastText: '#fff',
    },
    error: {
      light: '##ef9a9a',
      main: '#ce667a',
      dark: '#af0025',
      contrastText: '#7e7e7e',
    },
    background: {
      default: '#1d1d1d',
      paper: '#2c2c2c',
    },
  },
  typography: {
    subtitle1: {
      fontStyle: 'italic',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 2,
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box pb={34}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/randomWord">
              <RandomSentence />
            </Route>
            <Route path="/transform">
              <BaseCalculator />
            </Route>
            <Route path="/github">
              <GitHubPages />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/test"></Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
