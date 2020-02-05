import React from "react";
import { makeStyles, Theme, Box } from "@material-ui/core";
import InputChat from "../Utils/InputChat";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  boxRoot: {
    backgroundColor: theme.palette.background.paper,
    position: "relative"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function NewTopicInput() {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.boxRoot} width="100%" borderRadius={8} mt={1}>
      <Link className={classes.link} to="forum/newtopic">
        <InputChat
          multiline
          label="New Topic"
          fullWidth
          placeHolder="Create a new Topic !"
          value={""}
          onChange={() => {}}
        />
      </Link>
    </Box>
  );
}
