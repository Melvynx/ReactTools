import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import InputChat from "../Utils/InputChat";
import SettingsButtonChat from "../Utils/SettingsButtonChat";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import { ROOT_DATABASE, TypeAuthForum } from "../../../utils/constante";

type TypeTopicAnswerInput = {
  topicID?: string;
  auth?: TypeAuthForum;
};

export default function TopicAnswerInput({ topicID, auth }: TypeTopicAnswerInput) {
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
    if (errorUser.length > 1 || errorMessage.length > 1) {
      return false;
    }
    let date = new Date();
    push({
      user_id: auth ? auth.auth.uid : "anonymous",
      user: auth ? auth.auth.displayName : user,
      message: message,
      date: date.getTime()
    });
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
      setErrorMessage("Message need 3 caractères.");
      return false;
    }
    if (message.length > 2000) {
      setErrorMessage("Message can't have mort than 2000 caractères.");
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
      {auth ? null : (
        <InputChat
          label="Username"
          value={user}
          helperText={errorUser}
          onChange={(event: any) => {
            setUser(event.target.value);
            checkUser();
          }}
        />
      )}
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
