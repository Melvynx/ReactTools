import React from "react";
import { Box } from "@material-ui/core";
import { TypeTopic } from "../utils/constante";
import TopicView from "./TopicView";
import Answer from "./Answer";
import TopicAnswerInput from "./TopicAnswerInput";
import Test212 from "./Test212";

type TypeTopicComponent = {
  topic?: TypeTopic;
  topicID?: string;
};

export default function Topic({ topic, topicID }: TypeTopicComponent) {
  console.log(topicID);

  return topic ? (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth={1000}>
        <TopicView title={topic.title} message={topic.message} user={topic.user} />
        <TopicAnswerInput topicID={topicID} />
        <Test212 reponse={topic.answer} />
      </Box>
    </Box>
  ) : (
    <div>Link not found</div>
  );
}
