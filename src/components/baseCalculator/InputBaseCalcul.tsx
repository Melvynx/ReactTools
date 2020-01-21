import React from "react";
import { Box, makeStyles, InputLabel } from "@material-ui/core";
import CustomTextField from "../Custom/CustomTextField";

type TypeInputBaseCalcul = {
  value: string;
  base: string;
  onChange: Function;
  error?: boolean;
  display?: boolean;
};

const useStylesInput = makeStyles(theme => ({
  input: {
    fontSize: 12,
    color: theme.palette.primary.main
  }
}));

export default function InputBaseCalcul({
  display,
  value,
  base,
  onChange,
  error
}: TypeInputBaseCalcul) {
  const classes = useStylesInput();
  return (
    <Box width="100%" m={1} pr={3} display={display ? "block" : "none"}>
      <InputLabel className={classes.input}>{base}</InputLabel>
      <CustomTextField
        id="Input for number"
        error={error}
        onChange={event => onChange(event)}
        fullWidth
        value={value}
      ></CustomTextField>
    </Box>
  );
}
