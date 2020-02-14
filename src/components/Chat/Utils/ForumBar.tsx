import React from "react";
import { Box, Fab, makeStyles, Theme } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomePageLinkButton from "../../HomePage/HomePageLinkButton";
import AuthButton from "../../HomePage/AuthButton";

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ForumBar() {
  const classes = useStyles();

  return (
    <Box position="relative" width="100%" height={60} borderRadius={8} className={classes.mainBox}>
      <HomePageLinkButton />
      <Switch>
        <Route path="/forum/topic">
          <Box position="absolute" top={10} left={60} zIndex={5000}>
            <Link to="/forum">
              <Fab color="primary" variant="round" size="small">
                <ArrowBackIcon />
              </Fab>
            </Link>
          </Box>
        </Route>
        <Route path="/forum/newtopic">
          <Box position="absolute" top={10} left={60} zIndex={5000}>
            <Link to="/forum">
              <Fab color="primary" variant="round" size="small">
                <ArrowBackIcon />
              </Fab>
            </Link>
          </Box>
        </Route>
      </Switch>
      <AuthButton />
    </Box>
  );
}
