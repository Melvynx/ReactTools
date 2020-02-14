import React from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import CreateTopicInput from "./CreateTopicInput";

const useStyles = makeStyles((theme: Theme) => ({
  boxRoot: {
    backgroundColor: theme.palette.background.paper,
    position: "relative"
  }
}));

type TypeCreateTopic = {
  create: Function;
  isAuth: boolean;
};

export default function CreateTopic({ create, isAuth }: TypeCreateTopic) {
  const createTopic = (title: string, username: string, message: string) => {
    create(title, username, message);
  };

  const classes = useStyles();
  return (
    <Box p={1} className={classes.boxRoot} width="100%" borderRadius={8} mt={1}>
      <Typography align="center" color="textPrimary" variant="h3">
        Create you're Topic !
      </Typography>
      <Typography align="center" color="textPrimary" variant="h6">
        Create you're dream.
      </Typography>

      <CreateTopicInput isAuth={isAuth} onCreate={createTopic} />
    </Box>
  );
}
