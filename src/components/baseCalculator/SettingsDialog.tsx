import React from "react";
import { Dialog, DialogTitle, makeStyles, DialogActions, Button } from "@material-ui/core";
import SettingsContent from "../randomSentence/settingsDialog/SettingsContent";
import { TypeSettings } from "../../page/BaseCalculator";

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
        cSwitch
        checked={settings.displayBase2}
        onChange={onChange}
        className={classes}
        typeSettings="2"
      >
        Affiché la base 2
      </SettingsContent>
      <SettingsContent
        cSwitch
        checked={settings.displayBase8}
        onChange={onChange}
        className={classes}
        typeSettings="8"
      >
        Affiché la base 8
      </SettingsContent>
      <SettingsContent
        cSwitch
        checked={settings.displayBase10}
        onChange={onChange}
        className={classes}
        typeSettings="10"
      >
        Affiché la base 10
      </SettingsContent>
      <SettingsContent
        cSwitch
        checked={settings.displayBase16}
        onChange={onChange}
        className={classes}
        typeSettings="16"
      >
        Affiché la base 16
      </SettingsContent>
      <DialogActions className={classes.background}>
        <Button color="primary" variant="outlined" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
