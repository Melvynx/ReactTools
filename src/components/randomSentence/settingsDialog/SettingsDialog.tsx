import React from "react";
import {
  Dialog,
  DialogTitle,
  makeStyles,
  DialogActions,
  Button
} from "@material-ui/core";
import SettingsContent from "./SettingsContent";
import { TypeSettingsButton } from "./SettingsButton";

type TypeSettingsDialog = TypeSettingsButton & {
  open: boolean;
  onClose: Function;
};

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    color: theme.palette.primary.contrastText
  }
}));

export default function SettingsDialog({
  open,
  onClose,
  settings,
  onChange
}: TypeSettingsDialog) {
  const classes = useStyles();

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle className={classes.background + " " + classes.text}>
        Settings Random Sentence
      </DialogTitle>
      <SettingsContent
        checked={settings.isCountDown}
        onChange={onChange}
        className={classes}
        typeSettings="countDown"
      >
        Activé le Timer avant d'afficher des réponses
      </SettingsContent>
      <SettingsContent
        checked={settings.isOneSentence}
        onChange={onChange}
        className={classes}
        typeSettings="oneSentence"
      >
        Afficher que la première réponse random
      </SettingsContent>
      <DialogActions className={classes.background}>
        <Button color="secondary" variant="outlined" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}