import React from "react";
import {
  TextField,
  makeStyles,
  fade,
  TextFieldProps,
  OutlinedInputProps,
} from "@material-ui/core";

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

export default function CustomTextField(props: TextFieldProps) {
  const classes = useStyles();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}
