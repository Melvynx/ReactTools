import React from "react";
import { TypeTopic } from "../../utils/constante";
import { Box, Typography, makeStyles, Theme } from "@material-ui/core";
import Content from "../Utils/Content";
import Userdate from "./Userdate";

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

export default function TopicView({ title, user, message, date }: TypeTopic) {
  const classes = useStyles();

  return (
    <Box boxShadow={100} className={classes.mainBox} borderRadius={8}>
      <Box className={classes.titleBox} p={1} pl={2} borderRadius={8}>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>
        <Userdate user={user} date={date} />
      </Box>
      <Box p={2}>
        <Content>{message}</Content>
      </Box>
    </Box>
  );
}
