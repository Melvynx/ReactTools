import React from "react";
import { Box, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { WEBSITE_NAME } from "../utils/constante";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.main
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box position="absolute" className={classes.box} bottom={0} width="100%" height={200}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        width="100%"
        alignItems="center"
      >
        <Typography color="secondary" align="center" variant="body1">
          {WEBSITE_NAME} Made By MelvynX
        </Typography>
        <Typography color="secondary" align="center" variant="body1">
          Deploy on GitHubPage
        </Typography>
        <Typography color="secondary" align="center" variant="body1">
          melvynx 2019
        </Typography>
      </Box>
    </Box>
  );
}
