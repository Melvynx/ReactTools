import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
type TypeCountDown = {
  onFinish: Function;
};

export default function CountDown({ onFinish }: TypeCountDown) {
  const [countDown, setCountDown] = useState<number>(3);
  const startCountDown = () => {
    console.log("change count down");
    setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
  };
  useEffect(() => {
    startCountDown();
  });

  if (countDown === 0) {
    onFinish();
  }

  return (
    <Box
      bgcolor="dark"
      color="white"
      justifyContent="center"
      p={2}
      display="flex"
    >
      <Typography variant="h3">{countDown}</Typography>
    </Box>
  );
}
