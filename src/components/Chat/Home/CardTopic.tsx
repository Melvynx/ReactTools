import React, { useState } from "react";
import { Card, Box, makeStyles, CardContent, Typography, Fade } from "@material-ui/core";
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
    justifyContent: "center",
    display: "flex",
    alignItems: "flex-end",
    bottom: 0,
    width: "100%",
    height: 128,
    background: "linear-gradient(0deg, #1d1d1d 0%, #1d1d1d 1%, rgba(0,0,0,0) 70%)"
  }
}));

type TypeCardTopic = {
  value: TypeTopic;
  keyName: string;
};

export default function CardTopic({ value, keyName }: TypeCardTopic) {
  const [isHover, setHover] = useState(false);
  const classes = useStyles();
  return (
    <Link to={"/forum/topic/" + keyName} className={classes.link}>
      <Box
        width="100%"
        mt={1}
        mb={2}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={classes.card}
      >
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
        <Box className={classes.overFlow}>
          <Fade in={isHover}>
            <Typography variant="body1" color="textSecondary">
              afficher
            </Typography>
          </Fade>
        </Box>
      </Box>
    </Link>
  );
}
