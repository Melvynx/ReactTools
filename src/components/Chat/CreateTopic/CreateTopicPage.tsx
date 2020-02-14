import React, { useState, useEffect } from "react";
import CreateTopic from "./CreateTopic";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import { ROOT_DATABASE } from "../../../utils/constante";
import { Redirect } from "react-router-dom";
import { authHelper } from "../../../utils/authHelper";

export default function CreateTopicPage() {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [auth, setAuth] = useState();

  const { authListener } = authHelper();

  useEffect(() => {
    authListener((actualAuth: any) => {
      if (actualAuth) {
        setAuth(actualAuth);
      } else {
        setAuth(undefined);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { push } = firebaseHelper(ROOT_DATABASE + "/topic");

  const createTopic = (title: string, username: string, message: string) => {
    const date = new Date();

    push({
      title: title,
      user_id: auth ? auth.uid : "anonymous",
      user: auth ? auth.displayName : username,
      message: message,
      date: date.getTime()
    });
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="/forum" />
  ) : (
    <CreateTopic isAuth={auth ? true : false} create={createTopic} />
  );
}
