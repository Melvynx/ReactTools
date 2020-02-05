import React from "react";
import { Box } from "@material-ui/core";
import { TypeTopic } from "../../utils/constante";
import CardTopic from "./CardTopic";
import CardTopicSkeleton from "../Skeleton/CardTopicSkeleton";

type TypeListTopic = {
  topic: Array<TypeTopic>;
};

export default function ListTopic({ topic }: TypeListTopic) {
  return (
    <Box m={2}>
      <Box>
        {topic.length === 0
          ? ["a", "b", "c", "d"].map(value => <CardTopicSkeleton key={value} />)
          : Object.keys(topic).map((keyName: any, index) => (
              <CardTopic key={keyName} keyName={keyName} value={topic[keyName]} />
            ))}
      </Box>
    </Box>
  );
}
