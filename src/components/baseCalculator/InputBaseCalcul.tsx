import React from "react";
import { Box, makeStyles, InputLabel } from "@material-ui/core";
import CustomTextField from "../Custom/CustomTextField";
import { pink } from "@material-ui/core/colors";

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
        id="Input for number"
        error={error}
        onChange={event => onChange(event)}
        fullWidth
        value={value}
        helperText={<Box color={pink[800]}>{helperText} </Box>}
      ></CustomTextField>
    </Box>
  );
}
