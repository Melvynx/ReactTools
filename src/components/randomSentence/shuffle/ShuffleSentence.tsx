import React, { useState } from "react";
import { Box } from "@material-ui/core";
import BoxShuffleSentence from "./BoxShuffleSentence";
import CountDown from "./ShuffleCountDown";
import SettingsButtonShuffle from "../settingsDialog/SettingsButtonShuffle";

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
  const [listSentence, setListSentence] = useState<Array<string>>(
    randomListSentence(wordList)
  );

  const toggleRandomWord = () => {
    setListSentence(randomListSentence(wordList));
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

function randomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

function randomListSentence(list: Array<string>) {
  const listCopy: Array<string> = [...list];
  const listResult: Array<string> = [];
  for (let i = 0; i < list.length; i++) {
    const number = randomNumber(listCopy.length);
    listResult.push(listCopy[number]);
    listCopy.splice(number, 1);
  }
  return listResult;
}
