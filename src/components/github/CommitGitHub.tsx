import React, { useState } from "react";
import { Box, Typography, Link } from "@material-ui/core";
import CommitBox from "./CommitBox";

type TypeCommitGitHub = {
  apiCommit: any;
};

export default function CommitGitHub({ apiCommit }: TypeCommitGitHub) {
  const [isLoad, setLoad] = useState<boolean>(false);

  if (apiCommit.length > 1) {
    if (isLoad === false) {
      console.log("change");
      setLoad(true);
    }
  }

  const fiveFirstCommit = () => {
    if (apiCommit.length > 4) {
      let fiveCommits = [];
      for (let i = 0; i < 5; i++) {
        fiveCommits.push(apiCommit[i]);
      }
      console.log("five commit", fiveCommits);
      return fiveCommits;
    }
    return apiCommit;
  };

  console.log("API COMMIT", apiCommit);
  return (
    <Box>
      {isLoad
        ? fiveFirstCommit().map((value: any, index: number) => (
            <CommitBox value={value} index={index} key={index} />
          ))
        : "rien"}
    </Box>
  );
}
