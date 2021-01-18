import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";
import SettingsContent from "../randomSentence/settingsDialog/SettingsContent";
import { TypeSettings } from "../../page/BaseCalculator";

type TypeSettingsDialog = {
  open: boolean;
  onClose: Function;
  settings: TypeSettings;
  onChange: Function;
};

export default function SettingsDialog({ open, onClose, settings, onChange }: TypeSettingsDialog) {
  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>Settings Random Sentence</DialogTitle>
      <SettingsContent cSwitch checked={settings.displayBase2} onChange={onChange} typeSettings="2">
        Affiché la base 2
      </SettingsContent>
      <SettingsContent cSwitch checked={settings.displayBase8} onChange={onChange} typeSettings="8">
        Affiché la base 8
      </SettingsContent>
      <SettingsContent
        cSwitch
        checked={settings.displayBase10}
        onChange={onChange}
        typeSettings="10"
      >
        Affiché la base 10
      </SettingsContent>
      <SettingsContent
        cSwitch
        checked={settings.displayBase16}
        onChange={onChange}
        typeSettings="16"
      >
        Affiché la base 16
      </SettingsContent>
      <DialogActions>
        <Button color="secondary" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
