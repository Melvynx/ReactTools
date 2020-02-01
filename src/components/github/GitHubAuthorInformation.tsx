import React from "react";
import { Box, Typography } from "@material-ui/core";
type TypeGitHubAuthorInformation = {
  children: string;
  label: string;
  align?: boolean;
};
export default function GitHubAuthorInformation({
  label,
  children,
  align
}: TypeGitHubAuthorInformation) {
  return (
    <Box>
      <Typography variant="h5" color="primary">
        {label}
      </Typography>
      <Typography variant="h5" color="textPrimary">
        {children}
      </Typography>
    </Box>
  );
}
