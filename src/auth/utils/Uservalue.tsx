import React from "react";
import { Box, Typography } from "@material-ui/core";

type TypeUservalue = {
  label: string;
  children: string;
};

export default function Uservalue({ label, children }: TypeUservalue) {
  return (
    <Box display="flex" m={1}>
      <Box width="60%">
        <Typography align="left" variant="body1">
          {label}
        </Typography>
      </Box>
      <Box width="40%">
        <Typography color="primary" align="right" variant="body1">
          {children}
        </Typography>
      </Box>
    </Box>
  );
}
