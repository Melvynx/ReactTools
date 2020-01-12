import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
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
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Box width={400} height={100} borderRadius="50">
          <CustomCardHomePage image={page[0].image} title={page[0].title} body={page[0].body} />
          <CustomCardHomePage image={page[1].image} title={page[1].title} body={page[1].body} />
        </Box>
      </Box>
    </Box>
  );
}

const page: Array<TypeCustomCardHomePage> = [
  {
    image: "images/shuffleImage.png",
    title: "test",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque."
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/wooden-koh-kood-thailand-this-260nw-1189819042.jpg",
    title: "ok",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque."
  },
  {
    image:
      "https://media.gettyimages.com/photos/oil-refinery-plant-and-gas-industrial-factory-this-immage-can-use-for-picture-id1087977564?s=612x612",
    title: "lol",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque."
  },
  {
    image:
      "http://image.blingee.com/images16/content/output/000/000/000/55e/423059779_606302.gif?4",
    title: "oui",
    body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem esse, obcaecati similique laborum repudiandae voluptatibus iste commodi quasi, illo eaque ab, qui quibusdam iure in laboriosam eveniet rem doloremque."
  }
];
