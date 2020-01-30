import React from "react";
import { Box, Typography, makeStyles, Theme } from "@material-ui/core";

type TypeTextLine = {
  children: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  color: {
    color: theme.palette.primary.light
  }
}));

export default function Content({ children }: TypeTextLine) {
  const classes = useStyles();

  return (
    <Box>
      {children.split("\n").map((item, i) => (
        <Typography variant="body1" key={i} className={classes.color} style={{ minHeight: 24 }}>
          {item}
          {"      "}
        </Typography>
      ))}
    </Box>
  );
}
