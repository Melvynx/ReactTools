import React, { useEffect, useState } from "react";
import { Box, Theme, Divider } from "@material-ui/core";
import { TypeTopic, TypeAuthForum, TypeAuthDoc } from "../../../utils/constante";
import TopicView from "./TopicView";
import Answer from "./Answer";
import TopicAnswerInput from "./TopicAnswerInput";
import { makeStyles } from "@material-ui/styles";
import { authHelper } from "../../../utils/authHelper";
import TopicSkeleton from "../Skeleton/TopicSkeleton";

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
  const [auth, setAuth] = useState<TypeAuthForum>();

  const classes = useStyles();

  const { authListener, getCollection } = authHelper();

  useEffect(() => {
    //Set variable for unmounted componend.
    let deleted = false;
    authListener((actualAuth: any) => {
      //If the composent is unmounted, return.
      if (deleted) {
        return;
      }

      if (actualAuth) {
        getCollection(actualAuth.uid, (doc: TypeAuthDoc) =>
          setAuth({ auth: actualAuth, collection: doc })
        );
      } else {
        setAuth(undefined);
      }
    });

    return () => {
      deleted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return topic ? (
    <Box mt={1}>
      <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2}>
        <TopicView
          topicID={topicID}
          title={topic.title}
          message={topic.message}
          user={topic.user}
          date={topic.date}
          auth={auth}
          user_id={topic.user_id}
        />
        <Divider />
        <TopicAnswerInput auth={auth} topicID={topicID} />
      </Box>
      <Answer reponse={topic.answer} auth={auth} topicID={topicID} />
    </Box>
  ) : (
    <TopicSkeleton />
  );
}