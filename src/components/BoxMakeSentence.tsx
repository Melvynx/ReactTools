import React, { useState } from "react";
import { Box, useTheme, Fade } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type TypeListWordBox = {
  children: string;
  index: number;
  onDelete: Function;
};
export default function BoxMakeSentence({
  index,
  children,
  onDelete
}: TypeListWordBox) {
  const [isHover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  const toggleHover = (state: boolean) => {
    setHover(state);
  };
  return (
    <Box
      position="relative"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onClick={() => onDelete(index)}
      m={1}
      p={0.5}
      borderRadius={2}
      border={1}
      color={theme.palette.secondary.main}
      borderColor={theme.palette.secondary.main}
      fontSize="body1.fontSize"
      pr={2.2}
    >
      {children}
      <Box position="absolute" right={-2} top={4.5}>
        <Fade in={isHover}>
          <CloseIcon fontSize="small" />
        </Fade>
      </Box>
    </Box>
  );
}
