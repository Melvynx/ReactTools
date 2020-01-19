import React from "react";
import { Box, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function HomePageLinkButton() {
  return (
    <Box position="absolute" top={10} left={10} zIndex={1000}>
      <Link to="/">
        <Fab color="primary" variant="round" size="small">
          <ArrowBackIcon />
        </Fab>
      </Link>
    </Box>
  );
}
