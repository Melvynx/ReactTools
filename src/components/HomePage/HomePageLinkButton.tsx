import React from "react";
import { Box, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

export default function HomePageLinkButton() {
  return (
    <Box position="absolute" top={10} left={10} zIndex={5000}>
      <Link to="/">
        <Fab color="primary" variant="round" size="small">
          <HomeIcon />
        </Fab>
      </Link>
    </Box>
  );
}
