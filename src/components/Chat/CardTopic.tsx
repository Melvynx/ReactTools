import React from "react";
import { Card, Box, makeStyles, CardContent, Typography } from "@material-ui/core";
import { TypeTopic } from "../components/utils/constante";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid " + theme.palette.primary.main
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid " + theme.palette.primary.main
  },
  title: {
    color: "black"
  },
  message: {
    lineHeight: "1.5em",
    maxHeight: "100px" /* height is 2x line-height, so two lines will display */,
    overflow: "hidden",
    color: theme.palette.secondary.contrastText,
    textOverflow: "ellipsis"
  },
  link: {
    textDecoration: "none"
  }
}));
type TypeCardTopic = {
  value: TypeTopic;
};

export default function CardTopic({ value }: TypeCardTopic) {
  const classes = useStyles();
  return (
    <Link to="/chat/" className={classes.link}>
      <Box width="100%" maxWidth={300} minWidth={200} maxHeight={600}>
        <Card className={classes.card}>
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
              {value.message}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
