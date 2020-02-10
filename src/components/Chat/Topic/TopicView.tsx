import React from "react";
import { TypeTopic } from "../../../utils/constante";
import { Box, Typography, makeStyles, Theme } from "@material-ui/core";
import Content from "../Utils/Content";
import Userdate from "./Userdate";
import SettingsTopicButton from "./SettingsTopicButton";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  user: {},
  mainBox: {
    backgroundColor: theme.palette.background.paper
  },
  titleBox: {
    backgroundColor: theme.palette.divider
  },
  infoBox: {},
  infoPaper: {
    backgroundColor: theme.palette.divider,
    paddingLeft: 8
  }
}));

export default function TopicView({
  title,
  user,
  message,
  date,
  auth,
  topicID,
  user_id
}: TypeTopic) {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.titleBox} p={1} pl={2} borderRadius={8}>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>
        <Userdate user={user} date={date} />
      </Box>
      <Box p={2}>
        <Content>{message}</Content>
      </Box>
      <SettingsTopicButton auth={auth} topicID={topicID} userID={user_id} />
    </Box>
  );
}
