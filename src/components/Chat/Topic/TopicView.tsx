import React from "react";
import { TypeTopic } from "../../utils/constante";
import { Box, Typography, makeStyles, Theme, Paper } from "@material-ui/core";
import Content from "../Utils/Content";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  user: {},
  mainBox: {
    backgroundColor: theme.palette.background.paper
  },
  infoBox: {},
  infoPaper: {
    backgroundColor: theme.palette.divider,
    paddingLeft: 8
  }
}));

export default function TopicView({ title, user, message }: TypeTopic) {
  const classes = useStyles();

  return (
    <Box boxShadow={100} className={classes.mainBox} borderRadius={8} p={2}>
      <Box pl={4}>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>
      </Box>
      <Box className={classes.infoBox} mb={3}>
        <Paper className={classes.infoPaper}>
          <Typography className={classes.user} variant="subtitle1" color="textSecondary">
            Posted by {user} at 5 Januar 2020
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Content>{message}</Content>
      </Box>
    </Box>
  );
}
