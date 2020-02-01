import React from "react";
import { Box, Typography } from "@material-ui/core";

type TypeTextLine = {
  children: string;
};

export default function Content({ children }: TypeTextLine) {
  return (
    <Box>
      {children.split("\n").map((item, i) => (
        <Typography variant="body1" key={i} color="textPrimary" style={{ minHeight: 24 }}>
          {item}{" "}
        </Typography>
      ))}
    </Box>
  );
}
