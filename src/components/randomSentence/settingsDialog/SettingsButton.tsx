import React from "react";
import { Box, makeStyles, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  button: {
    width: 42,
    height: 42
  }
});

export type TypeSettingsButton = {
  onClick: Function;
};

export default function SettingsButton({ onClick }: TypeSettingsButton) {
  const classes = useStyles();

  return (
    <>
      <Box position="absolute" top={10} right={10}>
        <IconButton className={classes.button} color="secondary" onClick={() => onClick()}>
          <SettingsIcon className="buttonSafari" color="secondary" />
        </IconButton>
      </Box>
    </>
  );
}
