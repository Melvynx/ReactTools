//Generate a random number
export function randomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

//Shuffle a list
export function shuffleList(list: Array<string>) {
  const listCopy: Array<string> = [...list];
  const listResult: Array<string> = [];
  for (let i = 0; i < list.length; i++) {
    const number = randomNumber(listCopy.length);
    listResult.push(listCopy[number]);
    listCopy.splice(number, 1);
  }
  return listResult;
}

//Binary to decimal
export function bin_to_dec(bin: string) {
  return parseInt(bin, 2);
}

export function bin_to_hexa(bin: string) {
  return parseInt(bin, 2)
    .toString(16)
    .toUpperCase();
}

export function bin_to_oct(bin: string) {
  return parseInt(bin, 2).toString(8);
}

export function isBinary(number: string) {
  let isValide: boolean = true;

  if (number.length === 0) {
    return false;
  }

  const stringNumberArray: Array<String> = number.split("");

  for (let i = 0; i < stringNumberArray.length; i++) {
    if (stringNumberArray[i] !== "1" && stringNumberArray[i] !== "0") {
      isValide = false;
    }
  }

  return isValide;
}

export function dec_to_bin(dec: string) {
  return (Number(dec) - 0).toString(2);
}

export function dec_to_hexa(dec: string) {
  return (Number(dec) - 0).toString(16).toUpperCase();
}

export function dec_to_oct(dec: string) {
  return (Number(dec) - 0).toString(8);
}

export function isDecimal(dec: string) {
  if (isNaN(Number(dec))) {
    return false;
  } else {
    return true;
  }
}

export function isHexadecimal(hexa: string) {
  if (hexa === "0" || hexa === "") {
    return false;
  }
  const array = hexa.split("");
  const notBinaryLetter = [
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "'",
    '"'
  ];

  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < notBinaryLetter.length; y++) {
      if (array[i].toLowerCase() === notBinaryLetter[y]) {
        return false;
      }
    }
  }
  return true;
}
export function hexa_to_dec(hexa: string) {
  return parseInt(hexa, 16);
}
export function hexa_to_bin(hexa: string) {
  return parseInt(hexa, 16).toString(2);
}
export function hexa_to_oct(hexa: string) {
  return parseInt(hexa, 16).toString(8);
}

export function isOctal(oct: string) {
  if (oct === "0" || oct === "") {
    return false;
  }
  const arrayOct: Array<string> = oct.split("");

  for (let i = 0; i < arrayOct.length; i++) {
    if (arrayOct[i] === "9" || arrayOct[i] === "8") {
      return false;
    }
  }
  return true;
}

export function oct_to_dec(oct: string) {
  return parseInt(oct, 8);
}
export function oct_to_hexa(oct: string) {
  return parseInt(oct, 8)
    .toString(16)
    .toUpperCase();
}
export function oct_to_bin(oct: string) {
  return parseInt(oct, 8).toString(2);
}
