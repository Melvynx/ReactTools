import React from "react";
import { Dialog, DialogTitle, makeStyles, DialogActions, Button } from "@material-ui/core";
import { TypeSettings } from "../../../page/RandomSentence";
import SettingsContent from "./SettingsContent";

type TypeSettingsDialog = {
  open: boolean;
  onClose: Function;
  settings: TypeSettings;
  onChange: Function;
};

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main
  },
  text: {
    color: theme.palette.secondary.contrastText
  }
}));

export default function SettingsDialog({ open, onClose, settings, onChange }: TypeSettingsDialog) {
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
        cSwitch
      >
        Activé le Timer avant d'afficher des réponses
      </SettingsContent>
      <SettingsContent
        checked={settings.isOneSentence}
        onChange={onChange}
        className={classes}
        typeSettings="oneSentence"
        cSwitch
      >
        Afficher que la première réponse random
      </SettingsContent>
      <SettingsContent
        onChange={onChange}
        value={String(settings.timerTime)}
        className={classes}
        typeSettings="timerTime"
      >
        Seconde avant fin du timer
      </SettingsContent>
      <DialogActions className={classes.background}>
        <Button color="primary" variant="outlined" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
