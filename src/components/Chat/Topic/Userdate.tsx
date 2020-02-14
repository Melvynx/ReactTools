import React from "react";
import { Avatar, Box, Typography, makeStyles, Theme } from "@material-ui/core";

type TypeUserDate = {
  user: string;
  date: string;
  auth?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

export default function Userdate({ user, date, auth }: TypeUserDate) {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Avatar className={classes.avatar} color="primary">
          {user[0]}
        </Avatar>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" ml={1}>
        <Box display="flex" alignItems="center">
          <Typography variant="body1">{user}</Typography>
          {auth ? (
            <img
              src="images/validation.png"
              width={15}
              height={15}
              alt="validation"
              style={{ margin: 2 }}
            />
          ) : null}
        </Box>

        <Typography variant="subtitle1">{new Date(date).toLocaleString()}</Typography>
      </Box>
    </Box>
  );
}
