import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import CreateTopic from "../components/Chat/CreateTopic";
import ListTopic from "../components/Chat/ListTopic";
import { firebaseHelper } from "../components/utils/firebaseHelper";
import { TypeTopic } from "../components/utils/constante";

export default function Chat() {
  const { onValue, push } = firebaseHelper("chat/topic");

  const [topic, setTopic] = useState<Array<TypeTopic>>([]);

  const createTopic = (title: string, username: string, message: string) => {
    push({ title: title, user: username, message: message });
  };

  useEffect(() => {
    console.log("test");
    onValue((firebaseTopic: any) => {
      setTopic(firebaseTopic);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth={1000}>
        <CreateTopic create={createTopic} />
        <ListTopic topic={topic} />
      </Box>
    </Box>
  );
}
