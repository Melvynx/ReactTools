import React from "react";
import { Card, Box, makeStyles, CardContent, Typography } from "@material-ui/core";
import { TypeTopic } from "../../../utils/constante";
import { Link } from "react-router-dom";
import Content from "../Utils/Content";
import Userdate from "../Topic/Userdate";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.divider
  },
  title: {},
  message: {
    lineHeight: "1.5em",
    maxHeight: "150px" /* height is 2x line-height, so two lines will display */,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  link: {
    textDecoration: "none"
  },
  card: {
    position: "relative"
  },
  overFlow: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 64,
    background:
      "linear-gradient(0deg, rgba(36,0,26,1) 0%, rgba(29,29,29,1) 0%, rgba(44,44,44,0) 90%)"
  }
}));

type TypeCardTopic = {
  value: TypeTopic;
  keyName: string;
};

export default function CardTopic({ value, keyName }: TypeCardTopic) {
  const classes = useStyles();
  return (
    <Link to={"/forum/topic/" + keyName} className={classes.link}>
      <Box width="100%" mt={1} mb={2} className={classes.card}>
        <Card>
          <Box className={classes.header} p={1} pl={2}>
            <Typography color="textPrimary" variant="h4" className={classes.title}>
              {value.title}
            </Typography>
            <Userdate user={value.user} date={value.date} />
          </Box>
          <CardContent className={classes.message}>
            <Content>{value.message}</Content>
          </CardContent>
        </Card>
        <Box className={classes.overFlow}></Box>
      </Box>
    </Link>
  );
}
