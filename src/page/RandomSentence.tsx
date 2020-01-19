import React, { useState } from "react";
import { Box, Typography, Container, useTheme } from "@material-ui/core";
import MakeSentence from "../components/randomSentence/make/MakeSentence";
import ShuffleSentence from "../components/randomSentence/shuffle/ShuffleSentence";
import SettingsButton from "../components/randomSentence/settingsDialog/SettingsButton";
import HomePageLinkButton from "../components/HomePage/HomePageLinkButton";

export type TypeSettings = {
  isCountDown: boolean;
  isOneSentence: boolean;
};

export default function RandomSentence() {
  const theme = useTheme();
  const [wordList, setWordList] = useState<Array<string>>([]);
  const [isAdding, setAdding] = useState<boolean>(true);
  const [settings, setSettings] = useState<TypeSettings>({
    isCountDown: false,
    isOneSentence: false
  });

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

  return (
    <Container maxWidth="sm">
      <Box
        m={1}
        p={1}
        border={1}
        borderColor="primary"
        bgcolor={theme.palette.secondary.main}
        borderRadius={1}
        position="relative"
      >
        <HomePageLinkButton />

        <SettingsButton settings={settings} onChange={toggleSettings} />

        <Box height={20} display={{ xs: "block", sm: "none", md: "none" }} />

        <Typography color="textSecondary" align="center" variant="h3">
          Random word or sentence !
        </Typography>

        <Typography color="textSecondary" align="center" variant="subtitle1">
          We gonna random all you're sentence to find a random list of your sentence.
        </Typography>

        {isAdding ? (
          <MakeSentence
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
    </Container>
  );
}
