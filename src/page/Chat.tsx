import React from "react";
import { Box } from "@material-ui/core";
import CreateTopic from "../Chat/CreateTopic";
import ListTopic from "../Chat/ListTopic";
import { firebaseHelper } from "../components/utils/firebaseHelper";

export default function Chat() {
  const { onValue, push } = firebaseHelper("chat/topic");

  const createTopic = (title: string, username: string, message: string) => {
    push({ title: title, user: username, message: message });
  };

  onValue((x: any) => {
    console.log(x);
  });

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth={1000}>
        <CreateTopic create={createTopic} />
        <ListTopic />
      </Box>
    </Box>
  );
}
