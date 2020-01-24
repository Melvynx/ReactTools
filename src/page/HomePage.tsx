import React from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import CustomCardHomePage from "../components/HomePage/CustomCardHomePage";
import { TypeCustomCardHomePage } from "../components/HomePage/CustomCardHomePage";

const useStyles = makeStyles(theme => ({
  textColor: { color: theme.palette.primary.contrastText }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Box alignItems="center" textAlign="center" className={classes.textColor}>
      <Typography color="textSecondary" variant="h2">
        Baddadin
      </Typography>
      <Typography color="textSecondary" variant="h4">
        App by Melvyn
      </Typography>
      <Typography color="textSecondary" variant="subtitle1">
        It's an app for learn React.
      </Typography>

      <Box m={2}>
        <Grid container justify="center" spacing={2}>
          {page.map(({ image, title, body, link }, index) => (
            <Grid item key={index}>
              <CustomCardHomePage link={link} image={image} title={title} body={body} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

const page: Array<TypeCustomCardHomePage> = [
  {
    image: "images/shuffleImage.png",
    title: "Shuffle Sentence !",
    body:
      "It's an application to shuffle how many sentence you want, you can't have one result, or a numbered list for result !",
    link: "/randomword"
  },
  {
    image: "images/numberBase.jpg",
    title: "Base convertor",
    body:
      "Calculator for change base 2 to base 10 and base 16, or inverse ! It's in really time, faster and easy !",
    link: "/transform"
  }
];
/*
,
  {
    image:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    title: "GitHub MelvynX",
    body: "It's a page who resens my GitHub pages !!!",
    link: "/github"
  }*/
