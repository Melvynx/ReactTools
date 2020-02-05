import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/Chat/Home/HomePage";
import CreateTopicPage from "../components/Chat/CreateTopic/CreateTopicPage";
import RedirectTopic from "./RedirectTopic";
import { Box } from "@material-ui/core";
import ForumBar from "../components/Chat/Utils/ForumBar";

export default function Forum() {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth={1000}>
        <ForumBar />
        <Switch>
          <Route path="/forum/topic">
            <RedirectTopic />
          </Route>
          <Route path="/forum/newtopic">
            <CreateTopicPage />
          </Route>
          <Route path="/forum/">
            <HomePage />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
