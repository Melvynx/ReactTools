import React from "react";
import { Box, makeStyles, InputLabel } from "@material-ui/core";
import CustomTextField from "../Custom/CustomTextField";

type TypeInputBaseCalcul = {
  value: string;
  base: string;
  onChange: Function;
  error?: boolean;
  display?: boolean;
  helperText: string;
};

const useStylesInput = makeStyles(theme => ({
  input: {
    fontSize: 12,
    color: theme.palette.primary.main,
    marginBottom: 3
  },
  helperText: {
    color: theme.palette.error.main
  }
}));

export default function InputBaseCalcul({
  display,
  value,
  base,
  onChange,
  error,
  helperText
}: TypeInputBaseCalcul) {
  const classes = useStylesInput();
  return (
    <Box width="100%" m={0.8} pr={3} display={display ? "block" : "none"}>
      <InputLabel className={classes.input}>{base}</InputLabel>
      <CustomTextField
        error={error}
        onChange={event => onChange(event)}
        fullWidth
        value={value}
        helperText={
          <Box component="span" className={classes.helperText}>
            {helperText}{" "}
          </Box>
        }
      ></CustomTextField>
    </Box>
  );
}
