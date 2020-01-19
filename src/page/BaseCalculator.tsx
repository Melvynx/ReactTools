import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Calculator from "../components/baseCalculator/Calculator";
import HomePageLinkButton from "../components/HomePage/HomePageLinkButton";

export default function BaseCalculator() {
  return (
    <Container maxWidth="sm">
      <Box m={1} p={1} border={1} borderColor="primary" borderRadius={1} position="relative">
        <HomePageLinkButton />
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
