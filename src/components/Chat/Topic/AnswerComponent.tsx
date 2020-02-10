import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import Content from "../Utils/Content";
import { TypeAnswerChat } from "../../../utils/constante";
import Userdate from "./Userdate";

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
};

export default function AnswerComponent({ reponse, keyName }: TypeAnswerComponent) {
  const classes = useStyles();
  return (
    <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2} key={keyName}>
      <Box className={classes.userBox} p={1} pl={2} borderRadius={8}>
        <Userdate user={reponse.user} date={reponse.date} />
      </Box>
      <Box p={2}>
        <Content>{reponse.message}</Content>
      </Box>
    </Box>
  );
}
