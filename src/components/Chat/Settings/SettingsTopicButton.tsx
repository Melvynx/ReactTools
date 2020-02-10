import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { TypeAuthForum, ROOT_DATABASE } from "../../../utils/constante";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

type TypeSettingsTopicButton = {
  auth?: TypeAuthForum;
  topicID?: string;
  userID: string;
};

export default function SettingsTopicButton({ auth, topicID, userID }: TypeSettingsTopicButton) {
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
    <Box display="flex" justifyContent="flex-end" width="100%">
      <DeleteButton needRedirect path={ROOT_DATABASE + "/topic/" + topicID} />

      <EditButton path={ROOT_DATABASE + "/topic/" + topicID} />
    </Box>
  ) : null;
}
