import React, { useState } from "react";
import { Box } from "@material-ui/core";
import InputChat from "../Utils/InputChat";
import SettingsButtonChat from "../Utils/SettingsButtonChat";

type TypeCreateTopicInput = {
  isAuth: boolean;
  onCreate: Function;
};

export default function CreateTopicInput({ isAuth, onCreate }: TypeCreateTopicInput) {
  const [title, setTitle] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [helperUsername, setHelperUsername] = useState<string>("");
  const [helperMessage, setHelperMessage] = useState<string>("");
  const [helperTitle, setHelperTitle] = useState<string>("");

  const reset = () => {
    setTitle("");
    setUsername("");
    setMessage("");
  };

  const checkAvailableValue = () => {
    let isReady = true;
    if (!isAuth) {
      if (username.length <= 2 || username.length > 30) {
        setHelperUsername("Username need to be between 2 and 30 caractères.");
        isReady = false;
      } else {
        setHelperUsername("");
      }
      if (title.length <= 6 || title.length > 50) {
        setHelperTitle("Username need to be between 6 and 50 caractères.");
        isReady = false;
      } else {
        setHelperTitle("");
      }
      if (message.length < 50 || message.length > 10000) {
        setHelperMessage("Username need to be between 50 and 10000 caractères.");
        isReady = false;
      } else {
        setHelperMessage("");
      }
    }
    return isReady;
  };

  const create = () => {
    if (checkAvailableValue()) {
      reset();
      onCreate(title, username, message);
    }
  };

  return (
    <Box>
      <InputChat
        label="Title"
        value={title}
        onChange={(event: any) => setTitle(event.target.value)}
        fullWidth
        helperText={helperTitle}
      />
      {isAuth ? null : (
        <InputChat
          label="Username"
          value={username}
          onChange={(event: any) => setUsername(event.target.value)}
          helperText={helperUsername}
        />
      )}
      <InputChat
        multiline
        label="Message"
        value={message}
        onChange={(event: any) => setMessage(event.target.value)}
        fullWidth
        helperText={helperMessage}
      />
      <SettingsButtonChat onReset={reset} onCreate={create} />
    </Box>
  );
}
