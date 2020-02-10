import React from "react";
import { Box } from "@material-ui/core";
import AnswerComponent from "./AnswerComponent";
import { TypeArrayAnswer } from "../../../utils/constante";

type TypeAnswer = {
  reponse?: any;
};

export default function Answer({ reponse }: TypeAnswer) {
  const reponseArray = () => {
    const array: Array<TypeArrayAnswer> = [];
    Object.keys(reponse).map((keyName: string, index) =>
      array.push({ key: keyName, val: reponse[keyName] })
    );
    return array;
  };

  return (
    <Box>
      {reponse ? (
        <Box>
          {reponseArray().map(value => (
            <AnswerComponent reponse={value.val} keyName={value.key} key={value.key} />
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
