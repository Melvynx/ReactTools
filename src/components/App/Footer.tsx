import React from "react";
import { Box, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { WEBSITE_NAME } from "../utils/constante";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.dark
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
        <Typography color="textSecondary" align="center" variant="body1">
          <b>{WEBSITE_NAME}</b> Made By <b>MelvynX</b>
        </Typography>
        <Typography color="textSecondary" align="center" variant="body1">
          Deploy on GitHubPage
        </Typography>
        <Typography color="textSecondary" align="center" variant="body1">
          melvynx 2019
        </Typography>
      </Box>
    </Box>
  );
}
