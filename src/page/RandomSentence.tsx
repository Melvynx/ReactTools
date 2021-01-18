import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import MakeSentence from '../components/randomSentence/make/MakeSentence';
import ShuffleSentence from '../components/randomSentence/shuffle/ShuffleSentence';
import SettingsButton from '../components/randomSentence/settingsDialog/SettingsButton';
import HomePageLinkButton from '../components/HomePage/HomePageLinkButton';
import SettingsDialog from '../components/randomSentence/settingsDialog/SettingsDialog';

export type TypeSettings = {
  isCountDown: boolean;
  isOneSentence: boolean;
  timerTime: number;
};

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 12,
    },
  },
  mainBox: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RandomSentence() {
  const classes = useStyles();
  const [wordList, setWordList] = useState<Array<string>>([]);
  const [isAdding, setAdding] = useState<boolean>(true);
  const [settings, setSettings] = useState<TypeSettings>({
    isCountDown: true,
    isOneSentence: false,
    timerTime: 3,
  });
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const toggleSettings = (value: string, param?: string) => {
    switch (value) {
      case 'countDown':
        setSettings({
          isCountDown: !settings.isCountDown,
          isOneSentence: settings.isOneSentence,
          timerTime: settings.timerTime,
        });
        break;
      case 'oneSentence':
        setSettings({
          isOneSentence: !settings.isOneSentence,
          isCountDown: settings.isCountDown,
          timerTime: settings.timerTime,
        });
        break;
      case 'timerTime':
        let paramNumber: number = 0;
        if (!isNaN(Number(param))) {
          paramNumber = Number(param);
        }
        setSettings({
          isOneSentence: settings.isOneSentence,
          isCountDown: settings.isCountDown,
          timerTime: Number(paramNumber),
        });

        setSettings({
          isOneSentence: settings.isOneSentence,
          isCountDown: settings.isCountDown,
          timerTime: Number(paramNumber),
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
      setWordList(['one', 'two', 'three']);
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
        p={2}
        borderRadius={8}
        position="relative"
        maxWidth={512}
        width="100%"
        className={classes.mainBox}
      >
        <HomePageLinkButton />

        <SettingsButton onClick={handleSettings} />

        <SettingsDialog
          settings={settings}
          onChange={toggleSettings}
          onClose={handleSettings}
          open={openSettings}
        />

        <Box height={20} display={{ xs: 'block', sm: 'none', md: 'none' }} />

        <Typography className={classes.title} align="center" variant="h4">
          Random you're sentence!
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
            timerTime={settings.timerTime}
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
