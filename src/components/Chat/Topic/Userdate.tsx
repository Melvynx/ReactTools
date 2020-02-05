import React from "react";
import { Avatar, Box, Typography, makeStyles, Theme } from "@material-ui/core";

type TypeUserDate = {
  user: string;
  date: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

export default function Userdate({ user, date }: TypeUserDate) {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Avatar className={classes.avatar} color="primary">
          {user[0]}
        </Avatar>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" ml={1}>
        <Typography variant="body1">{user}</Typography>
        <Typography variant="subtitle1">{date}</Typography>
      </Box>
    </Box>
  );
}
