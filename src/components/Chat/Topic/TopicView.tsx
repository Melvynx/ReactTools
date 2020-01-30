import React from "react";
import { TypeTopic } from "../../utils/constante";
import { Box, Typography, makeStyles, Theme, Paper } from "@material-ui/core";
import Content from "../Utils/Content";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  user: {
    fontStyle: "italic"
  },
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.primary.dark,
    boxShadow: "0px 0px 4px 1px " + theme.palette.primary.dark
  },
  infoBox: {
    borderColor: theme.palette.secondary.contrastText
  },
  infoPaper: {
    backgroundColor: theme.palette.secondary.light,
    padding: 6,
    margin: 6
  }
}));

export default function TopicView({ title, user, message }: TypeTopic) {
  const classes = useStyles();

  return (
    <Box border={1} mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2}>
      <Box>
        <Typography variant="h2" color="textSecondary">
          {title}
        </Typography>
      </Box>
      <Box className={classes.infoBox} borderBottom={1} mb={3}>
        <Paper className={classes.infoPaper}>
          <Typography className={classes.user} variant="h6" color="textSecondary">
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
