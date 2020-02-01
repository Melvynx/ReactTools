import React from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import CustomCardHomePage from "../components/HomePage/CustomCardHomePage";
import { WEBSITE_NAME, cardHomePage } from "../components/utils/constante";



export default function HomePage() {
  return (
    <Box alignItems="center" textAlign="center">
      <Typography variant="h2">{WEBSITE_NAME}</Typography>
      <Typography variant="h4">App by Melvyn</Typography>
      <Typography variant="subtitle1">It's an app for learn React.</Typography>

      <Box m={2}>
        <Grid container justify="center" spacing={2}>
          {cardHomePage.map(({ image, title, body, link }, index) => (
            <Grid item key={index}>
              <CustomCardHomePage link={link} image={image} title={title} body={body} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}


/*
,
  {
    image:
      "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA",
    title: "GitHub MelvynX",
    body: "It's a page who resens my GitHub pages !!!",
    link: "/github"
  }*/
