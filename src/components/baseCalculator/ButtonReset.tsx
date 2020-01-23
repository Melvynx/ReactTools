import React from "react";
import { Box, Button } from "@material-ui/core";

type TypeButtonReset = {
  onClick: Function;
};

export default function ButtonReset({ onClick }: TypeButtonReset) {
  return (
    <Box display="flex" justifyContent="right">
      <Button onClick={() => onClick()} color="primary" variant="outlined">
        Reset
      </Button>
    </Box>
  );
}
