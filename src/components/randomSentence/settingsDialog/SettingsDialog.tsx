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
  background: {},
  text: {}
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
        typeSettings="countDown"
        cSwitch
      >
        Activé le Timer avant d'afficher des réponses
      </SettingsContent>
      <SettingsContent
        checked={settings.isOneSentence}
        onChange={onChange}
        typeSettings="oneSentence"
        cSwitch
      >
        Afficher que la première réponse random
      </SettingsContent>
      <SettingsContent
        onChange={onChange}
        value={String(settings.timerTime)}
        typeSettings="timerTime"
      >
        Seconde avant fin du timer
      </SettingsContent>
      <DialogActions className={classes.background}>
        <Button color="secondary" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
