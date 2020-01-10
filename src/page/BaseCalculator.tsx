import React, { Component } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export default function BaseCalculator() {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box
        m={1}
        p={1}
        border={1}
        borderColor="primary"
        borderRadius={1}
        position="relative"
      >
        <Typography variant="h3">Change base calculator !</Typography>
        <Typography variant="subtitle1">
          Enter a number where you want to transform this in all base !
        </Typography>
      </Box>
    </Container>
  );
}
