import React, { useEffect, useState } from "react";
import { Route, useParams, Switch } from "react-router-dom";
import Topic from "../components/Chat/Topic/Topic";
import { firebaseHelper } from "../components/utils/firebaseHelper";
import { TypeTopic } from "../components/utils/constante";

export default function RedirectTopic() {
  return (
    <Switch>
      <Route path="/chat/topic/:topicUrl" children={<Child />} />
    </Switch>
  );
}
function Child() {
  const [topic, setTopic] = useState<TypeTopic>();
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { topicUrl } = useParams();

  const { onValue } = firebaseHelper("chat/topic/" + topicUrl);

  useEffect(() => {
    onValue((firebaseTopic: any) => {
      setTopic(firebaseTopic);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Topic topic={topic} topicID={topicUrl} />;
}
