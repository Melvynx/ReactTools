import React from "react";
import { Box } from "@material-ui/core";
import { TypeTopicList } from "../../../utils/constante";
import CardTopic from "./CardTopic";
import CardTopicSkeleton from "../Skeleton/CardTopicSkeleton";

type TypeListTopic = {
  topic: any;
};

export default function ListTopic({ topic }: TypeListTopic) {
  const topicArray = () => {
    const array: Array<TypeTopicList> = [];
    Object.keys(topic).map((keyName: string, index) =>
      array.push({ key: keyName, topic: topic[keyName] })
    );
    return array.reverse();
  };

  return (
    <Box mt={2} mb={2}>
      <Box>
        {topic
          ? topic.length === 0
            ? ["a", "b", "c", "d"].map(value => (
                <CardTopicSkeleton key={value} />
              ))
            : topicArray().map(value => (
                <CardTopic
                  key={value.key}
                  keyName={value.key}
                  value={value.topic}
                />
              ))
          : null}
      </Box>
    </Box>
  );
}
