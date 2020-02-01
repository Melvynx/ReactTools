import React from "react";
import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default function CommitSkeleton() {
  return (
    <Box>
      <Box m={1.5} p={0}>
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
      </Box>
    </Box>
  );
}
