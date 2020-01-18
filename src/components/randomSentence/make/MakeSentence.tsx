import React, { useState } from "react";
import { Box, Button, makeStyles, Fade } from "@material-ui/core";
import ListMakeSentence from "./ListMakeSentence";
import { Alert } from "@material-ui/lab";
import InputMakeSentence from "./InputMakeSentence";

const useStyles = makeStyles({
  inputBase: {
    fontSize: 20,
    transition: "all .5",
    borderBottom: "1px solid #aa00ff",
    "&:action": {
      borderBottom: "1px solid red"
    }
  },
  button: {
    height: 40
  },
  boxWord: {
    minWidth: 300
  }
});

type TypeAddWord = {
  wordList: Array<string>;
  addWord: Function;
  removeWord: Function;
  toggleAdding: Function;
};

export default function MakeSentence({ wordList, addWord, removeWord, toggleAdding }: TypeAddWord) {
  const classes = useStyles();
  const [sentence, setSentence] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const toggleChange = (event: any) => {
    setSentence(event.target.value);
  };

  const toggleNewWord = () => {
    if (sentence.length < 1 || sentence.length > 100) {
      setErrorMessage("The sentence need to be between 1 and 100 caractères. ");
      removeErrorMessage();
      return;
    }
    for (let i = 0; i < wordList.length; i++) {
      if (sentence === wordList[i]) {
        setErrorMessage("This sentence aldery exist. ");
        removeErrorMessage();
        return;
      }
    }
    addWord(sentence);
    setSentence("");
  };

  const removeErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  const toggleKeyEnter = (event: any) => {
    const key = event.key;
    if (key === "Enter") {
      toggleNewWord();
    }
  };

  return (
    <Box>
      <ListMakeSentence wordList={wordList} toggleDeleteWord={removeWord} />

      <Box position="absolute" top={10} left={10}>
        <Fade in={errorMessage.length > 1}>
          <Alert severity="error">{errorMessage}</Alert>
        </Fade>
      </Box>

      <InputMakeSentence
        onChange={toggleChange}
        onKeyUp={toggleKeyEnter}
        onClick={toggleNewWord}
        classes={classes}
        inputValue={sentence}
      />

      <Button fullWidth color="primary" onClick={() => toggleAdding()} variant="outlined">
        Ramdomizzz
      </Button>
    </Box>
  );
}
