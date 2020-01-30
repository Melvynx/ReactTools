import React from "react";
import { Box, Paper, Typography, makeStyles, Theme } from "@material-ui/core";
import Content from "../Custom/Content";
import { TypeAnswerChat } from "../utils/constante";

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  user: {
    fontStyle: "italic"
  },
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0px 0px 4px 1px " + theme.palette.primary.dark
  },
  infoBox: {
    borderColor: theme.palette.secondary.contrastText
  },
  infoPaper: {
    backgroundColor: theme.palette.secondary.light,
    padding: 6,
    margin: 6
  }
}));

type TypeAnswer = {
  machin?: any;
};

export default function Answer({ machin }: TypeAnswer) {
  const classes = useStyles();
  return machin ? (
    Object.keys(machin).map((keyName: any, index) => (
      <Box
        border={1}
        mt={1}
        boxShadow={100}
        borderColor="primary"
        className={classes.mainBox}
        borderRadius={5}
        p={2}
      >
        <Box className={classes.infoBox} borderBottom={1} mb={3}>
          <Paper className={classes.infoPaper}>
            <Typography className={classes.user} variant="h6" color="textSecondary">
              Posted by {machin[keyName].user} at 5 Januar 2020
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Content>{machin[keyName].message}</Content>
        </Box>
      </Box>
    ))
  ) : (
    <div>eror</div>
  );
}
