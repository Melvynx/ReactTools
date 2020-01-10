import React from "react";
import { ButtonGroup, Button, IconButton, makeStyles } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles(theme => ({
  iconButton: {
    border: "1px solid " + theme.palette.secondary.dark
  }
}));
type TypeSettingsButtonShuffle = {
  toggleRandomWord: Function;
  toggleAdding: Function;
};
export default function SettingsButtonShuffle({
  toggleRandomWord,
  toggleAdding
}: TypeSettingsButtonShuffle) {
  const classes = useStyles();
  return (
    <ButtonGroup fullWidth>
      <Button
        color="secondary"
        variant="outlined"
        onClick={() => toggleRandomWord()}
      >
        Random
      </Button>
      <IconButton
        className={classes.iconButton}
        color="secondary"
        onClick={() => toggleAdding()}
        size="small"
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </ButtonGroup>
  );
}
