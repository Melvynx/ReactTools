import React, { useState, ChangeEvent } from "react";
import { Box } from "@material-ui/core";
import InputBaseCalcul from "./InputBaseCalcul";
import {
  isBinary,
  bin_to_dec,
  bin_to_hexa,
  isDecimal,
  dec_to_bin,
  dec_to_hexa,
  isHexadecimal,
  hexa_to_dec,
  hexa_to_bin,
  isOctal,
  oct_to_bin,
  oct_to_dec,
  oct_to_hexa,
  hexa_to_oct,
  dec_to_oct,
  bin_to_oct
} from "../utils/function";
import { TypeSettings } from "../../page/BaseCalculator";
import ButtonReset from "./ButtonReset";

type TypeValue = {
  value: string;
  base: Base;
};

export enum Base {
  base16 = "base 16",
  base10 = "base 10",
  base8 = "base 8",
  base2 = "base 2",
  baseN = "Base null"
}

type TypeCalculator = {
  settings: TypeSettings;
};

type TypeErrorMessage = {
  base: Base;
  error: string;
};

export default function Calculator({ settings }: TypeCalculator) {
  const [base2, setBase2] = useState<string>("");
  const [base10, setBase10] = useState<string>("");
  const [base8, setBase8] = useState<string>("");
  const [base16, setBase16] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<TypeErrorMessage>({
    base: Base.baseN,
    error: ""
  });

  const displayErrorMessage = (text: string, baseValue: Base) => {
    setErrorMessage({ base: baseValue, error: text });
  };

  const changeBase2 = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBase2(event.target.value);

    binaryConvertor(event.target.value);
  };
  const changeBase10 = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBase10(event.target.value);

    decimalConvertor(event.target.value);
  };
  const changeBase16 = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBase16(event.target.value.toUpperCase());

    hexadecimalConvertor(event.target.value);
  };

  const changeBase8 = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setBase8(event.target.value);

    octalConvertor(event.target.value);
  };

  const binaryConvertor = (value: string) => {
    if (isBinary(value)) {
      setBase10(String(bin_to_dec(value)));
      setBase16(bin_to_hexa(value));
      setBase8(bin_to_oct(value));
      displayErrorMessage(" ", Base.baseN);
    } else {
      displayErrorMessage("Binary number is null or invalid (only 0 and 1).", Base.base2);
    }
  };

  const decimalConvertor = (value: string) => {
    if (isDecimal(value)) {
      setBase2(dec_to_bin(value));
      setBase16(dec_to_hexa(value));
      setBase8(dec_to_oct(value));
      displayErrorMessage(" ", Base.baseN);
    } else {
      displayErrorMessage("Decimal number is null or invalid (only 0 to 9).", Base.base10);
    }
  };

  const hexadecimalConvertor = (value: string) => {
    if (isHexadecimal(value)) {
      setBase2(String(hexa_to_bin(value)));
      setBase10(String(hexa_to_dec(value)));
      setBase8(String(hexa_to_oct(value)));
      displayErrorMessage(" ", Base.baseN);
    } else {
      displayErrorMessage(
        "Hexadecimal number is null or invalid (only 0 to 9 and A to F)",
        Base.base16
      );
    }
  };

  const octalConvertor = (value: string) => {
    if (isOctal(value)) {
      setBase2(oct_to_bin(value));
      setBase10(String(oct_to_dec(value)));
      setBase16(oct_to_hexa(value));
      displayErrorMessage(" ", Base.baseN);
    } else {
      displayErrorMessage("Octal number is null or invalid (only 0 to 7)", Base.base8);
    }
  };

  const resetValue = () => {
    setBase2("");
    setBase10("");
    setBase8("");
    setBase16("");
    displayErrorMessage(" ", Base.baseN);
  };

  return (
    <Box mt={2}>
      <InputBaseCalcul
        display={settings.displayBase2}
        onChange={changeBase2}
        base="Binary"
        value={base2}
        helperText={errorMessage.base === Base.base2 ? errorMessage.error : ""}
      ></InputBaseCalcul>

      <InputBaseCalcul
        display={settings.displayBase8}
        onChange={changeBase8}
        base="Octale"
        value={base8}
        helperText={errorMessage.base === Base.base8 ? errorMessage.error : ""}
      ></InputBaseCalcul>

      <InputBaseCalcul
        display={settings.displayBase10}
        onChange={changeBase10}
        base="Decimal"
        value={base10}
        helperText={errorMessage.base === Base.base10 ? errorMessage.error : ""}
      ></InputBaseCalcul>

      <InputBaseCalcul
        display={settings.displayBase16}
        onChange={changeBase16}
        base="Hexadecimal"
        value={base16}
        helperText={errorMessage.base === Base.base16 ? errorMessage.error : ""}
      ></InputBaseCalcul>

      <ButtonReset onClick={resetValue} />
    </Box>
  );
}
