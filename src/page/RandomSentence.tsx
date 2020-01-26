import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import MakeSentence from "../components/randomSentence/make/MakeSentence";
import ShuffleSentence from "../components/randomSentence/shuffle/ShuffleSentence";
import SettingsButton from "../components/randomSentence/settingsDialog/SettingsButton";
import HomePageLinkButton from "../components/HomePage/HomePageLinkButton";
import SettingsDialog from "../components/randomSentence/settingsDialog/SettingsDialog";

export type TypeSettings = {
  isCountDown: boolean;
  isOneSentence: boolean;
};

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 12
    }
  }
}));

export default function RandomSentence() {
  const classes = useStyles();
  const [wordList, setWordList] = useState<Array<string>>([]);
  const [isAdding, setAdding] = useState<boolean>(true);
  const [settings, setSettings] = useState<TypeSettings>({
    isCountDown: false,
    isOneSentence: false
  });
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const toggleSettings = (value: string) => {
    switch (value) {
      case "countDown":
        setSettings({
          isCountDown: !settings.isCountDown,
          isOneSentence: settings.isOneSentence
        });
        break;
      case "oneSentence":
        setSettings({
          isOneSentence: !settings.isOneSentence,
          isCountDown: settings.isCountDown
        });
        break;
    }
  };

  const handleSettings = () => {
    setOpenSettings(!openSettings);
  };

  const addWord = (sentence: string) => {
    const list = [...wordList];
    list.push(sentence);
    setWordList(list);
  };

  const removeWord = (index: number) => {
    const list = [...wordList];
    list.splice(index, 1);
    setWordList(list);
  };

  const toggleAdding = () => {
    if (wordList.length === 0) {
      setWordList(["one", "two", "three"]);
      return;
    }
    setAdding(!isAdding);
  };

  const clearWord = () => {
    setWordList([]);
  };

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
          settings={settings}
          onChange={toggleSettings}
          onClose={handleSettings}
          open={openSettings}
        />

        <Box height={20} display={{ xs: "block", sm: "none", md: "none" }} />

        <Typography className={classes.title} color="textSecondary" align="center" variant="h3">
          Random word or sentence !
        </Typography>

        <Typography color="textSecondary" align="center" variant="subtitle1">
          We gonna random all you're sentence to find a random list of your sentence.
        </Typography>

        {isAdding ? (
          <MakeSentence
            toggleClean={clearWord}
            removeWord={removeWord}
            addWord={addWord}
            wordList={wordList}
            toggleAdding={toggleAdding}
          />
        ) : (
          <ShuffleSentence
            isCountDown={settings.isCountDown}
            isOneSentence={settings.isOneSentence}
            wordList={wordList}
            toggleAdding={toggleAdding}
          />
        )}
      </Box>
    </Box>
  );
}
