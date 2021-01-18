import React from "react";
import { Box } from "@material-ui/core";
import BoxMakeSentence from "./BoxMakeSentence";
import { TransitionGroup, CSSTransition } from "react-transition-group";
type TypeListMakeSentence = {
  wordList: Array<string>;
  toggleDeleteWord: Function;
};
export default function ListMakeSentence({ wordList, toggleDeleteWord }: TypeListMakeSentence) {
  return (
    <Box minHeight={100} className="testLol">
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <TransitionGroup className="listMakeSentence">
          {wordList.map((value, index) => (
            <CSSTransition key={value} timeout={500} classNames="item">
              <BoxMakeSentence onDelete={toggleDeleteWord} index={index} key={index}>
                {value}
              </BoxMakeSentence>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Box>
    </Box>
  );
}
