import React, { useState } from "react";
import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsDialog from "./SettingsDialog";
import { TypeSettings } from "../../../page/RandomSentence";
const useStyles = makeStyles({
  button: {
    width: 30,
    height: 30
  }
});

export type TypeSettingsButton = {
  settings: TypeSettings;
  onChange: Function;
};

export default function SettingsButton({ settings, onChange }: TypeSettingsButton) {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box position="absolute" top={10} right={10}>
        <Button className={classes.button} color="primary" onClick={handleClick} variant="outlined">
          <IconButton className="buttonSafari">
            <SettingsIcon color="primary" />
          </IconButton>
        </Button>
      </Box>
      <SettingsDialog settings={settings} onChange={onChange} onClose={handleClose} open={open} />
    </>
  );
}
