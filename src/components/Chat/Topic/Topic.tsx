import React from "react";
import { Box } from "@material-ui/core";
import { TypeTopic } from "../../utils/constante";
import TopicView from "./TopicView";
import Answer from "./Answer";
import TopicAnswerInput from "./TopicAnswerInput";
import HomePageLinkButton from "../../HomePage/HomePageLinkButton";

type TypeTopicComponent = {
  topic?: TypeTopic;
  topicID?: string;
};

export default function Topic({ topic, topicID }: TypeTopicComponent) {

  return topic ? (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth={1000} position="relative" mt={1}>
        <HomePageLinkButton />
        <TopicView title={topic.title} message={topic.message} user={topic.user} />
        <TopicAnswerInput topicID={topicID} />
        <Answer reponse={topic.answer} />
      </Box>
    </Box>
  ) : (
    <div>Link not found</div>
  );
}
