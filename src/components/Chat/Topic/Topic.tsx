import React from "react";
import { Box } from "@material-ui/core";
import { TypeTopic } from "../../utils/constante";
import TopicView from "./TopicView";
import Answer from "./Answer";
import TopicAnswerInput from "./TopicAnswerInput";

type TypeTopicComponent = {
  topic?: TypeTopic;
  topicID?: string;
};

export default function Topic({ topic, topicID }: TypeTopicComponent) {
  return topic ? (
    <Box mt={1}>
      <TopicView title={topic.title} message={topic.message} user={topic.user} date={topic.date} />
      <TopicAnswerInput topicID={topicID} />
      <Answer reponse={topic.answer} />
    </Box>
  ) : (
    <div>Link not found</div>
  );
}
