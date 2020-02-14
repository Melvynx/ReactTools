import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import Content from "../Utils/Content";
import { TypeAnswerChat } from "../../../utils/constante";
import Userdate from "./Userdate";
import SettingsAnswerButton from "../Settings/SettingsAnswerButton";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  textPaper: {
    fontStyle: "italic"
  },
  mainBox: {
    backgroundColor: theme.palette.background.paper
  },
  userBox: {
    backgroundColor: theme.palette.divider
  },
  paper: {
    paddingLeft: 8,
    backgroundColor: theme.palette.divider
  }
}));

type TypeAnswerComponent = {
  reponse: TypeAnswerChat;
  keyName: string;
  topicID?: string;
  auth: any;
};

export default function AnswerComponent({ reponse, keyName, topicID, auth }: TypeAnswerComponent) {
  const classes = useStyles();
  return (
    <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2} key={keyName}>
      <Box className={classes.userBox} p={1} pl={2} borderRadius={8}>
        <Userdate
          user={reponse.user}
          date={reponse.date}
          auth={reponse.user_id === "anonymous" ? false : true}
        />
      </Box>
      <Box p={2}>
        <Content>{reponse.message}</Content>
      </Box>
      <SettingsAnswerButton
        answer={keyName}
        userID={reponse.user_id}
        auth={auth}
        topicID={topicID}
      />
    </Box>
  );
}
