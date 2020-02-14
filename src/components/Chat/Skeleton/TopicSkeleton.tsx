import React from "react";
import { Box, Divider, makeStyles, Theme, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import UserdateSkeleton from "./UserdateSkeleton";
import InputChat from "../Utils/InputChat";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  user: {},
  mainBox: {
    backgroundColor: theme.palette.background.paper
  },
  titleBox: {
    backgroundColor: theme.palette.divider
  },
  infoBox: {},
  infoPaper: {
    backgroundColor: theme.palette.divider,
    paddingLeft: 8
  }
}));

export default function TopicSkeleton() {
  const classes = useStyles();
  return (
    <Box mt={1}>
      <Box mt={1} boxShadow={100} className={classes.mainBox} borderRadius={5} p={2}>
        <Box>
          <Box className={classes.titleBox} p={1} pl={2} borderRadius={8}>
            <Skeleton variant="text" width={200} height={50} />
            <UserdateSkeleton />
          </Box>
          <Box p={2}>
            <Skeleton variant="text" width={"100%"} height={30} />
            <Skeleton variant="text" width={"100%"} height={30} />
            <Skeleton variant="text" width={"100%"} height={30} />
            <Skeleton variant="text" width={"100%"} height={30} />
            <Skeleton variant="text" width={"100%"} height={30} />
          </Box>
        </Box>
        <Divider />
        <Box borderRadius={5} p={2}>
          <Skeleton variant="text" width={200} height={50} />
          <InputChat value="" onChange={() => {}} label="Message" fullWidth />
          <Box display="flex" justifyContent="flex-end">
            <Box mr={3}>
              <Button variant="contained" color="secondary">
                <Skeleton variant="text" width={50} height={25} />
              </Button>
            </Box>

            <Button variant="contained" color="primary">
              <Skeleton variant="text" width={50} height={25} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
