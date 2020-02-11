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
  const [helperUser, setHelperUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [helperMessage, setHelperMessage] = useState<string>("");
  
  const { push } = firebaseHelper(ROOT_DATABASE + "/topic/" + topicID + "/answer");

  const reset = () => {
    setUser("");
    setMessage("");
  };

  const createAnswer = () => {
    const userValide = auth?.auth ? true : checkUser();
    const messageValide = checkMessage();
    if (!userValide || !messageValide) {
      return;
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
    if (user.length < 3 || user.length >= 20) {
      setHelperUser("Message need to be between 4 and 20 caracteres");
      return false;
    }
    setHelperUser("");
    return true;
  };

  const checkMessage = () => {
    if (message.length < 5 || message.length > 2000) {
      setHelperMessage("Message need to be between 6 and 2000 caracteres");
      return false;
    }
    setHelperMessage("");
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
          helperText={helperUser}
          onChange={(event: any) => {
            setUser(event.target.value);
          }}
        />
      )}
      <InputChat
        multiline
        fullWidth
        label="Message"
        value={message}
        helperText={helperMessage}
        onChange={(event: any) => {
          setMessage(event.target.value);
        }}
      />
      <SettingsButtonChat onCreate={createAnswer} onReset={reset} />
    </Box>
  );
}
