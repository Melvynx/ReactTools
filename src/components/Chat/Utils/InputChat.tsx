import React from "react";
import { Box, makeStyles, InputLabel, Theme } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import CustomTextField from "../../Custom/CustomTextField";

type TypeInputChat = {
  value: string;
  onChange: Function;
  error?: boolean;
  helperText?: string;
  label: string;
  size?: number;
  multiline?: boolean;
  fullWidth?: boolean;
  placeHolder?: string;
  type?: string;
};

export default function InputChat({
  value,
  label,
  onChange,
  error,
  helperText,
  size,
  multiline,
  fullWidth,
  placeHolder,
  type
}: TypeInputChat) {
  const useStyles = makeStyles((theme: Theme) => ({
    label: {
      fontSize: 14,
      color: theme.palette.primary.main,
      marginBottom: 3,
      marginLeft: 4
    },
    input: {
      padding: 5
    }
  }));

  const classes = useStyles();

  return (
    <Box width="100%">
      <InputLabel className={classes.label}>{label}</InputLabel>
      <CustomTextField
        type={type ? type : undefined}
        placeholder={placeHolder}
        multiline={multiline}
        onChange={event => onChange(event)}
        className={classes.input}
        error={error}
        fullWidth={fullWidth}
        value={value}
        helperText={
          <Box component="span" color={pink[800]}>
            {helperText}{" "}
          </Box>
        }
      ></CustomTextField>
    </Box>
  );
}