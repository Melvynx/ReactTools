import React from "react";
import { Box, Typography } from "@material-ui/core";

type TypeGitHubAuthorFollow = {
  followers: number;
  following: number;
};

export default function GitHubAuthorFollow({ followers, following }: TypeGitHubAuthorFollow) {
  return (
    <Box border={1} borderColor="primary" display="flex">
      <Box borderRight={1} p={1}>
        <Typography align="center" variant="h5" color="textSecondary">
          Followers
        </Typography>
        <Typography align="center" variant="h5">
          {followers}
        </Typography>
      </Box>
      <Box p={1} borderLeft={1}>
        <Typography align="center" variant="h5" color="textSecondary">
          Following
        </Typography>
        <Typography align="center" variant="h5">
          {following}
        </Typography>
      </Box>
    </Box>
  );
}
