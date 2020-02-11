import React, { useState, useEffect } from "react";
import { Box, Divider } from "@material-ui/core";
import { TypeAuthForum, ROOT_DATABASE } from "../../../utils/constante";
import DeleteButton from "./DeleteButton";

type TypeSettingsTopicButton = {
  auth?: TypeAuthForum;
  topicID?: string;
  userID: string;
  answer: string;
};

export default function SettingsAnswerButton({
  auth,
  topicID,
  userID,
  answer
}: TypeSettingsTopicButton) {
  const [havePermission, setPermission] = useState();

  useEffect(() => {
    if (auth?.collection.group === "admin") {
      setPermission(true);
      return;
    }
    if (userID === auth?.auth.uid) {
      setPermission(true);
      return;
    }
    setPermission(false);
  }, [auth, userID]);

  return havePermission ? (
    <>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <DeleteButton
          path={ROOT_DATABASE + "/topic/" + topicID + "/answer/" + answer}
          type="answer"
        />
      </Box>
      <Divider />
    </>
  ) : null;
}
