import React from "react";
import { Box, Typography } from "@material-ui/core";
type TypeGitHubAuthorInformation = {
  children: string;
  label: string;
};
export default function GitHubAuthorInformation({ label, children }: TypeGitHubAuthorInformation) {
  return (
    <Box>
      <Typography variant="h5" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
}
