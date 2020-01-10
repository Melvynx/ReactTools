import React from "react";
import { Box } from "@material-ui/core";
type TypeListWordBoxRandomiz = {
  children: string;
  index: number;
};
export default function BoxShuffleSentence({
  children,
  index
}: TypeListWordBoxRandomiz) {
  const styleFinder = () => {
    const baseColor = "#aa00ff";
    const firstColor = "#e040fb";
    if (index === 0) {
      return { color: firstColor, weight: "bold" };
    } else {
      return { color: baseColor, weight: "normal" };
    }
  };
  return (
    <Box
      fontSize="h5.fontSize"
      ml={1}
      fontWeight={styleFinder().weight}
      color={styleFinder().color}
    >
      {index + 1}. {children}
    </Box>
  );
}
