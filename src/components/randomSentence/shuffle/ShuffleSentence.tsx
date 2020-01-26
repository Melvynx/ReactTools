import React, { useState } from "react";
import { Box } from "@material-ui/core";
import BoxShuffleSentence from "./BoxShuffleSentence";
import CountDown from "./ShuffleCountDown";
import SettingsButtonShuffle from "../settingsDialog/SettingsButtonShuffle";
import { shuffleList } from "../../utils/function";

type TypeListRandomWord = {
  wordList: Array<string>;
  toggleAdding: Function;
  isCountDown: boolean;
  isOneSentence: boolean;
};

export default function ShuffleSentence({
  wordList,
  toggleAdding,
  isCountDown,
  isOneSentence
}: TypeListRandomWord) {
  const [isCountdown, setIsCountdown] = useState<boolean>(isCountDown);
  const [listSentence, setListSentence] = useState<Array<string>>(shuffleList(wordList));

  const toggleRandomWord = () => {
    setListSentence(shuffleList(wordList));
  };

  const toggleCountDown = () => {
    setIsCountdown(!isCountdown);
  };

  return (
    <Box>
      <Box border={1} borderColor="secondary">
        {isCountdown ? (
          <CountDown onFinish={toggleCountDown} />
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
