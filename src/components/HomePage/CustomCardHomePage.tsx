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
import { TypeCustomCardHomePage } from "../utils/constante";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

export default function CustomCardHomePage({ image, title, body, link }: TypeCustomCardHomePage) {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.link}>
      <Box maxWidth={384} maxHeight={448}>
        <Card>
          <CardActionArea>
            <CardMedia height="150" component="img" image={image} />
            <CardContent>
              <Typography noWrap variant="h4">
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
}
