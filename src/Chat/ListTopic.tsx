import React from "react";
import { Box, Grid } from "@material-ui/core";
import { TypeTopic } from "../components/utils/constante";
import CardTopic from "./CardTopic";

type TypeListTopic = {
  topic: Array<TypeTopic>;
};

export default function ListTopic({ topic }: TypeListTopic) {
  return (
    <Box m={2}>
      <Grid container spacing={3}>
        {Object.keys(topic).map((keyName: any, index) => (
          <Grid item key={index}>
            <CardTopic value={topic[keyName]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
