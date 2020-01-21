import React from "react";
import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  button: {
    width: 30,
    height: 30
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
        <Button
          className={classes.button}
          color="primary"
          onClick={() => onClick()}
          variant="outlined"
        >
          <IconButton className="buttonSafari">
            <SettingsIcon color="primary" />
          </IconButton>
        </Button>
      </Box>
    </>
  );
}
