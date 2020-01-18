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

      <Grid container justify="center" spacing={1}>
        {page.map(({ image, title, body, link }, index) => (
          <Grid item>
            <CustomCardHomePage link={link} image={image} title={title} body={body} key={index} />
          </Grid>
        ))}
      </Grid>
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
    title: "Change Base Number",
    body:
      "Calculator for change base 2 to base 10 and base 16, or inverse ! It's in really time, faster and easy !",
    link: "/transform"
  },
  {
    image:
      "https://media.gettyimages.com/photos/oil-refinery-plant-and-gas-industrial-factory-this-immage-can-use-for-picture-id1087977564?s=612x612",
    title: "lol",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque.",
    link: "#"
  },
  {
    image:
      "http://image.blingee.com/images16/content/output/000/000/000/55e/423059779_606302.gif?4",
    title: "oui",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque.",
    link: "#"
  }
];
