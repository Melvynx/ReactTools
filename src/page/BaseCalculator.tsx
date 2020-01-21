import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Calculator from "../components/baseCalculator/Calculator";
import HomePageLinkButton from "../components/HomePage/HomePageLinkButton";
import SettingsButton from "../components/randomSentence/settingsDialog/SettingsButton";
import SettingsDialog from "../components/baseCalculator/SettingsDialog";

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 40
    }
  }
}));

export type TypeSettings = {
  displayBase2?: boolean;
  displayBase8?: boolean;
  displayBase10?: boolean;
  displayBase16?: boolean;
};

export default function BaseCalculator() {
  const [settings, setSettings] = useState<TypeSettings>({
    displayBase2: true,
    displayBase8: false,
    displayBase10: true,
    displayBase16: true
  });
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const handleSettings = () => {
    setOpenSettings(!openSettings);
  };

  const handleChangeSettings = (value: string) => {
    switch (value) {
      case "2":
        setSettings(prevState => {
          return { ...prevState, displayBase2: !settings.displayBase2 };
        });
        break;
      case "8":
        setSettings(prevState => {
          return { ...prevState, displayBase8: !settings.displayBase8 };
        });
        break;
      case "10":
        setSettings(prevState => {
          return { ...prevState, displayBase10: !settings.displayBase10 };
        });
        break;
      case "16":
        setSettings(prevState => {
          return { ...prevState, displayBase16: !settings.displayBase16 };
        });
    }
  };

  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <Box
        mt={1}
        p={1}
        border={1}
        borderColor="primary"
        borderRadius={1}
        position="relative"
        maxWidth={500}
        width="100%"
      >
        <HomePageLinkButton />

        <SettingsButton onClick={handleSettings} />

        <SettingsDialog
          onChange={handleChangeSettings}
          onClose={handleSettings}
          open={openSettings}
          settings={settings}
        />

        <Typography className={classes.title} align="center" variant="h4" color="textSecondary">
          Change base calculator !
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Enter a number where you want to transform this in all base !
        </Typography>
        <Calculator settings={settings} />
      </Box>
    </Box>
  );
}
