import React from "react";
import { Box, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  skeletonRect: {
    backgroundColor: theme.palette.primary.dark
  },
  skeletonText: {
    backgroundColor: theme.palette.primary.dark,
    height: 35
  },
  skeletonTextWhite: {
    backgroundColor: theme.palette.common.white,
    height: 35
  }
}));

export default function GitHubAuthorSkeleton() {
  const classes = useStyles();
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box width={100} mr={4} height={100} border={2} borderColor="primary">
          <Skeleton className={classes.skeletonRect} variant="rect" height="100%"></Skeleton>
        </Box>
        <Skeleton
          className={classes.skeletonTextWhite}
          height={35}
          variant="text"
          width={100}
        ></Skeleton>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around" m={3}>
        <Box>
          <Skeleton className={classes.skeletonTextWhite} width={125} variant="text"></Skeleton>
          <Skeleton className={classes.skeletonText} width={125} variant="text"></Skeleton>
        </Box>

        <Box>
          <Skeleton className={classes.skeletonTextWhite} width={125} variant="text"></Skeleton>
          <Skeleton className={classes.skeletonText} width={125} variant="text"></Skeleton>
        </Box>

        <Box border={1} borderColor="primary" display="flex">
          <Box borderRight={1} p={1}>
            <Skeleton className={classes.skeletonTextWhite} width={75} variant="text"></Skeleton>
            <Skeleton className={classes.skeletonText} width={75} variant="text"></Skeleton>
          </Box>
          <Box p={1} borderLeft={1}>
            <Skeleton className={classes.skeletonTextWhite} width={75} variant="text"></Skeleton>
            <Skeleton className={classes.skeletonText} width={75} variant="text"></Skeleton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
