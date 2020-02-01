import React from "react";
import { Card, Box, makeStyles, CardContent, Typography } from "@material-ui/core";
import { TypeTopic } from "../../utils/constante";
import { Link } from "react-router-dom";
import Content from "../Utils/Content";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.divider
  },
  title: {},
  message: {
    lineHeight: "1.5em",
    maxHeight: "100px" /* height is 2x line-height, so two lines will display */,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  link: {
    textDecoration: "none"
  }
}));

type TypeCardTopic = {
  value: TypeTopic;
  keyName: string;
};

export default function CardTopic({ value, keyName }: TypeCardTopic) {
  const classes = useStyles();
  return (
    <Link to={"/chat/topic/" + keyName} className={classes.link}>
      <Box width="100%" maxWidth={450} minWidth={200} maxHeight={600}>
        <Card>
          <Box className={classes.header} p={0.5}>
            <Typography align="center" color="textPrimary" variant="h5" className={classes.title}>
              {value.title}
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="subtitle1"
              className={classes.title}
            >
              {value.user}
            </Typography>
          </Box>

          <CardContent>
            <Typography variant="body1" className={classes.message}>
              <Content>{value.message}</Content>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
