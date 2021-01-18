import React from "react";
import { Box, Card, CardContent, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: 8
  },
  skeletonText: {
    backgroundColor: theme.palette.primary.main,
    height: 25
  },
  skeletonTextWhite: {
    backgroundColor: theme.palette.text.secondary,
    height: 25
  },
  skeletonBox: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 3
  }
}));

export default function CardGitHubSkeleton() {
  const classes = useStyles();
  return (
    <Box width={300}>
      <Card className={classes.card}>
        <CardContent>
          <Skeleton className={classes.skeletonTextWhite} variant="text"></Skeleton>

          <Skeleton className={classes.skeletonTextWhite} variant="text"></Skeleton>
        </CardContent>

        <Skeleton className={classes.skeletonText} width={100} variant="text"></Skeleton>
        <Skeleton className={classes.skeletonText} variant="text"></Skeleton>
        <Skeleton className={classes.skeletonText} variant="text"></Skeleton>
        <Skeleton className={classes.skeletonText} variant="text"></Skeleton>
        <Skeleton className={classes.skeletonText} variant="text"></Skeleton>
        <Skeleton className={classes.skeletonText} variant="text"></Skeleton>

        <Box display="flex" justifyContent="right" m={1}>
          <Skeleton
            className={classes.skeletonBox}
            variant="rect"
            width={100}
            height={25}
          ></Skeleton>
        </Box>
      </Card>
    </Box>
  );
}
