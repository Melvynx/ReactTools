import React from "react";
import { Card, Box, makeStyles, CardContent } from "@material-ui/core";
import { TypeTopic } from "../../../utils/constante";
import { Skeleton } from "@material-ui/lab";
import UserdateSkeleton from "./UserdateSkeleton";

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

export default function CardTopicSkeleton() {
  const classes = useStyles();
  return (
    <Box width="100%" mt={1} mb={1} className={classes.card}>
      <Card>
        <Box className={classes.header} p={1} pl={2}>
          <Skeleton variant="text" width={200} height={30} />
          <UserdateSkeleton />
        </Box>
        <CardContent className={classes.message}>
          <Skeleton variant="text" width="12" />
          <Skeleton variant="text" width="12" />
          <Skeleton variant="text" width="12" />
          <Skeleton variant="text" width="12" />
          <Skeleton variant="text" width="12" />
          <Skeleton variant="text" width="12" />
        </CardContent>
      </Card>
      <Box className={classes.overFlow}></Box>
    </Box>
  );
}
