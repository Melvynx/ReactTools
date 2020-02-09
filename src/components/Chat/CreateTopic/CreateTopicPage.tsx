import React from "react";
import CreateTopic from "./CreateTopic";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import { ROOT_DATABASE } from "../../../utils/constante";

export default function CreateTopicPage() {
  const { push } = firebaseHelper(ROOT_DATABASE + "/topic");

  const createTopic = (title: string, username: string, message: string) => {
    const date = new Date();

    push({ title: title, user: username, message: message, date: date.toLocaleString() });
  };

  return <CreateTopic create={createTopic} />;
}
