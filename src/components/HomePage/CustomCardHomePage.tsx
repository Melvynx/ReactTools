import React from "react";
import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core";

export type TypeCustomCardHomePage = {
  image: string;
  title: string;
  body: string;
};

export default function CustomCardHomePage({ image, title, body }: TypeCustomCardHomePage) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia height="200" component="img" image={image} />
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
