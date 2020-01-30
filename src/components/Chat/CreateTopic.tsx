import React, { useState } from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import InputChat from "./InputChat";
import SettingsButtonChat from "./SettingsButtonChat";

const useStyles = makeStyles((theme: Theme) => ({
  boxRoot: {
    borderColor: theme.palette.primary.main
  }
}));

type TypeCreateTopic = {
  create: Function;
};

export default function CreateTopic({ create }: TypeCreateTopic) {
  const [title, setTitle] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const changeTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const changeUsername = (event: any) => {
    setUsername(event.target.value);
  };
  const changeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const reset = () => {
    setTitle("");
    setUsername("");
    setMessage("");
  };

  const createTopic = () => {
    reset();
    create(title, username, message);
  };

  const classes = useStyles();
  return (
    <Box border={1} p={1} className={classes.boxRoot} width="100%">
      <Typography align="center" color="textSecondary" variant="h3">
        Create you're Topic !
      </Typography>
      <Typography align="center" color="textSecondary" variant="h6">
        Create you're dream.
      </Typography>

      <InputChat label="Title" value={title} onChange={changeTitle} />

      <InputChat label="Username" value={username} onChange={changeUsername} />

      <InputChat multiline label="Message" value={message} onChange={changeMessage} />

      <SettingsButtonChat onReset={reset} onCreate={createTopic} />
    </Box>
  );
}
