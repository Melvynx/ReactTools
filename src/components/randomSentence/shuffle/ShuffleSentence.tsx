import React, { useState } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import BoxShuffleSentence from "./BoxShuffleSentence";
import CountDown from "./ShuffleCountDown";
import SettingsButtonShuffle from "../settingsDialog/SettingsButtonShuffle";
import { shuffleList } from "../../../utils/function";

type TypeListRandomWord = {
  wordList: Array<string>;
  toggleAdding: Function;
  isCountDown: boolean;
  isOneSentence: boolean;
  timerTime: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  boxShuffle: {
    backgroundColor: theme.palette.divider
  }
}));

export default function ShuffleSentence({
  wordList,
  toggleAdding,
  isCountDown,
  isOneSentence,
  timerTime
}: TypeListRandomWord) {
  const [isCountdown, setIsCountdown] = useState<boolean>(isCountDown);
  const [listSentence, setListSentence] = useState<Array<string>>(shuffleList(wordList));

  const classes = useStyles();

  const toggleRandomWord = () => {
    setListSentence(shuffleList(wordList));
  };

  const toggleCountDown = () => {
    setIsCountdown(!isCountdown);
  };

  return (
    <Box>
      <Box p={1} m={1} className={classes.boxShuffle} borderRadius={3}>
        {isCountdown ? (
          <CountDown onFinish={toggleCountDown} timerTime={timerTime} />
        ) : isOneSentence ? (
          <BoxShuffleSentence index={0}>{listSentence[0]}</BoxShuffleSentence>
        ) : (
          listSentence.map((value, index) => (
            <BoxShuffleSentence index={index} key={index}>
              {value}
            </BoxShuffleSentence>
          ))
        )}
      </Box>
      <Box m={1}>
        <SettingsButtonShuffle
          toggleRandomWord={toggleRandomWord}
          toggleAdding={() => toggleAdding()}
        />
      </Box>
    </Box>
  );
}
