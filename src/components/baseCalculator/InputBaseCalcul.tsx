import React from "react";
import {
  Box,
  TextField,
  makeStyles,
  fade,
  TextFieldProps,
  OutlinedInputProps,
  InputLabel
} from "@material-ui/core";

type TypeInputBaseCalcul = {
  value: string;
  base: string;
  onChange: Function;
  error?: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid " + theme.palette.primary.dark,
    color: theme.palette.primary.light,
    padding: 2,
    paddingLeft: 6,
    fontSize: 18,
    overflow: "hidden",
    borderRadius: 3,
    backgroundColor: theme.palette.secondary.main,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    },
    "&$focused": {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 2px 0 0 2px`,
      borderColor: theme.palette.secondary.main
    }
  }
}));

function CustomTextField(props: TextFieldProps) {
  const classes = useStyles();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}

const useStylesInput = makeStyles(theme => ({
  input: {
    fontSize: 12,
    color: theme.palette.primary.main
  }
}));

export default function InputBaseCalcul({ value, base, onChange, error }: TypeInputBaseCalcul) {
  const classes = useStylesInput();
  return (
    <Box width="100%" m={1} pr={3}>
      <InputLabel className={classes.input}>{base}</InputLabel>
      <CustomTextField
        id="bootstrap-input"
        error={error}
        onChange={event => onChange(event)}
        fullWidth
        value={value}
      ></CustomTextField>
    </Box>
  );
}
