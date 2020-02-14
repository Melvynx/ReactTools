import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

type TypeUserDate = {
  user: string;
  date: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
}));

export default function UserdateSkeleton() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Skeleton
          variant="circle"
          width={40}
          height={40}
          color="primary"
          className={classes.avatar}
        />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" ml={1}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={100} />
      </Box>
    </Box>
  );
}
