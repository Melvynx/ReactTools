import React, { useState, useEffect } from "react";
import { firebaseHelper } from "../../utils/firebaseHelper";
import NewTopicInput from "./NewTopicInput";
import ListTopic from "./ListTopic";
import { TypeTopic } from "../../utils/constante";

export default function HomePage() {
  const { onValue } = firebaseHelper("chat/topic");

  const [topic, setTopic] = useState<Array<TypeTopic>>([]);

  useEffect(() => {
    onValue((firebaseTopic: any) => {
      setTopic(firebaseTopic);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NewTopicInput />
      <ListTopic topic={topic} />
    </>
  );
}
