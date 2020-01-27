import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
type TypeCountDown = {
  onFinish: Function;
  timerTime: number;
};

export default function ShuffleCountDown({ onFinish, timerTime }: TypeCountDown) {
  const [countDown, setCountDown] = useState<number>(timerTime);
  const startCountDown = () => {
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
    <Box bgcolor="dark" color="white" justifyContent="center" p={2} display="flex">
      <Typography variant="h3">{countDown}</Typography>
    </Box>
  );
}
