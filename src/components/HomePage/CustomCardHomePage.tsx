import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

export type TypeCustomCardHomePage = {
  image: string;
  title: string;
  body: string;
  link: string;
};

const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid " + theme.palette.primary.dark
  },
  background: {
    backgroundColor: theme.palette.secondary.main
  },
  link: {
    textDecoration: "none"
  }
}));

export default function CustomCardHomePage({ image, title, body, link }: TypeCustomCardHomePage) {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.link}>
      <Box maxWidth={350} maxHeight={420}>
        <Card className={classes.card}>
          <CardActionArea className={classes.background + " " + classes.card}>
            <CardMedia height="150" component="img" image={image} />
            <CardContent>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body1">{body}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
}
