import React from "react";
import { Box, Theme, Divider } from "@material-ui/core";
import { TypeTopic } from "../../../utils/constante";
import TopicView from "./TopicView";
import Answer from "./Answer";
import TopicAnswerInput from "./TopicAnswerInput";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    backgroundColor: theme.palette.background.paper
  }
}));

type TypeTopicComponent = {
  topic?: TypeTopic;
  topicID?: string;
};

export default function Topic({ topic, topicID }: TypeTopicComponent) {
  const classes = useStyles();
  return topic ? (
    <Box mt={1}>
      <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2}>
        <TopicView
          title={topic.title}
          message={topic.message}
          user={topic.user}
          date={topic.date}
        />
        <Divider />
        <TopicAnswerInput topicID={topicID} />
      </Box>
      <Answer reponse={topic.answer} />
    </Box>
  ) : (
    <Topic topic={{ title: " ", user: " ", message: " ", date: " \n\n\n", answer: [] }}></Topic>
  );
}
