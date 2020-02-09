import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import InputChat from "../Utils/InputChat";
import SettingsButtonChat from "../Utils/SettingsButtonChat";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import { ROOT_DATABASE } from "../../../utils/constante";

type TypeTopicAnswerInput = {
  topicID?: string;
};

export default function TopicAnswerInput({ topicID }: TypeTopicAnswerInput) {
  const [user, setUser] = useState<string>("");
  const [errorUser, setErrorUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { push } = firebaseHelper(ROOT_DATABASE + "/topic/" + topicID + "/answer");

  const reset = () => {
    setUser("");
    setMessage("");
  };

  const createAnswer = () => {
    let date = new Date();
    push({ user: user, message: message, date: date.toLocaleString() });
    reset();
  };

  const checkUser = () => {
    if (user.length < 2) {
      setErrorUser("Username need 3 caractères.");
      return false;
    }
    if (user.length > 20) {
      setErrorUser("Username can't have mort than 20 caractères.");
      return false;
    }
    setErrorUser("");
    return true;
  };

  const checkMessage = () => {
    if (message.length < 3) {
      setErrorMessage("Username need 3 caractères.");
      return false;
    }
    if (message.length > 20) {
      setErrorMessage("Username can't have mort than 20 caractères.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <Box borderRadius={5} p={2}>
      <Typography variant="h4" color="textPrimary">
        Un avis ?
      </Typography>
      <InputChat
        label="Username"
        value={user}
        helperText={errorUser}
        onChange={(event: any) => {
          setUser(event.target.value);
          checkUser();
        }}
      />
      <InputChat
        multiline
        fullWidth
        label="Message"
        value={message}
        helperText={errorMessage}
        onChange={(event: any) => {
          setMessage(event.target.value);
          checkMessage();
        }}
      />
      <SettingsButtonChat onCreate={createAnswer} onReset={reset} />
    </Box>
  );
}
