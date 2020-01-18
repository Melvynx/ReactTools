import React, { Component } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import InputBaseCalcul from "../components/baseCalculator/InputBaseCalcul";
import Calculator from "../components/baseCalculator/Calculator";

export default function BaseCalculator() {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box m={1} p={1} border={1} borderColor="primary" borderRadius={1} position="relative">
        <Typography align="center" variant="h4">
          Change base calculator !
        </Typography>
        <Typography variant="subtitle1" align="center">
          Enter a number where you want to transform this in all base !
        </Typography>
        <Calculator />
      </Box>
    </Container>
  );
}
