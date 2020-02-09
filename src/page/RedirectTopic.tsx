import React, { useEffect, useState } from "react";
import { Route, useParams, Switch } from "react-router-dom";
import Topic from "../components/Chat/Topic/Topic";
import { firebaseHelper } from "../utils/firebaseHelper";
import { TypeTopic, ROOT_DATABASE } from "../utils/constante";

export default function RedirectTopic() {
  return (
    <Switch>
      <Route path="/forum/topic/:topicUrl" children={<Child />} />
    </Switch>
  );
}
function Child() {
  const [topic, setTopic] = useState<TypeTopic>();
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { topicUrl } = useParams();
  const { onValue } = firebaseHelper(ROOT_DATABASE + "/topic/" + topicUrl);

  useEffect(() => {
    onValue((firebaseTopic: any) => {
      setTopic(firebaseTopic);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Topic topic={topic} topicID={topicUrl} />;
}
