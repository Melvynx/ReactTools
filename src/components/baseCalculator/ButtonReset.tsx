import React from "react";
import { Box, Button } from "@material-ui/core";

type TypeButtonReset = {
  onClick: Function;
};

export default function ButtonReset({ onClick }: TypeButtonReset) {
  return (
    <Box display="flex" justifyContent="right" flexDirection="row-reverse">
      <Button onClick={() => onClick()} color="secondary" className="safariRight">
        Reset
      </Button>
    </Box>
  );
}
