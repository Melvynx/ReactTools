import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
type TypeListWordBoxRandomiz = {
  children: string;
  index: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  first: {
    color: theme.palette.primary.main,
    fontWeigth: "bold"
  },
  other: {
    color: theme.palette.primary.dark,
    fontWeight: "normal"
  }
}));

export default function BoxShuffleSentence({ children, index }: TypeListWordBoxRandomiz) {
  const classes = useStyles();
  return (
    <Box
      fontSize="h5.fontSize"
      ml={1}
      mt={0.5}
      className={index === 0 ? classes.first : classes.other}
    >
      {index + 1}. {children}
    </Box>
  );
}
