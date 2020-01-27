import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import CommitBox from "./CommitBox";

type TypeCommitGitHub = {
  apiCommit: any;
};
const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.light,
    borderBottom: "1px solid " + theme.palette.primary.light,
    width: 140,
    paddingBottom: 0
  }
}));
export default function CommitGitHub({ apiCommit }: TypeCommitGitHub) {
  const [isLoad, setLoad] = useState<boolean>(false);

  const classes = useStyles();

  if (apiCommit.length > 1) {
    if (isLoad === false) {
      setLoad(true);
    }
  }

  const fiveFirstCommit = () => {
    if (apiCommit.length > 4) {
      let fiveCommits = [];
      for (let i = 0; i < 5; i++) {
        fiveCommits.push(apiCommit[i]);
      }
      return fiveCommits;
    }
    return apiCommit;
  };

  return (
    <Box>
      <Box ml={1.5}>
        <Typography variant="h6" className={classes.title}>
          5 last commits
        </Typography>
      </Box>
      {isLoad
        ? fiveFirstCommit().map((value: any, index: number) => (
            <CommitBox value={value} index={index} key={index} />
          ))
        : "no commit"}
    </Box>
  );
}
