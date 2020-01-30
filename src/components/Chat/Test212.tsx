import React from "react";
import { TypeAnswerChat } from "../utils/constante";
import { Box, makeStyles, Theme, Typography, Paper } from "@material-ui/core";
import Content from "../Custom/Content";

type TypeTest212 = {
  reponse?: any;
};

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
    height: 25,
    margin: 5,
    paddingLeft: 5
  }
}));
export default function Test212({ reponse }: TypeTest212) {
  const classes = useStyles();
  console.log(reponse);
  return (
    <Box>
      {reponse ? (
        <Box>
          {Object.keys(reponse).map((keyName: string, index) => (
            <Box
              border={1}
              mt={1}
              boxShadow={100}
              borderColor="primary"
              className={classes.mainBox}
              borderRadius={5}
              p={2}
              key={keyName}
            >
              <Box className={classes.infoBox} borderBottom={1} mb={3}>
                <Paper className={classes.infoPaper}>
                  <Typography className={classes.user} variant="subtitle1" color="textSecondary">
                    Posted by {reponse[keyName].user} at 5 Januar 2020
                  </Typography>
                </Paper>
              </Box>
              <Content>{reponse[keyName].message}</Content>
            </Box>
          ))}
        </Box>
      ) : (
        <div></div>
      )}
    </Box>
  );
}

/*
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
    */
