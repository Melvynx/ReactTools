import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { TypeAuthForum } from "../../../utils/constante";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

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
      <Button>
        <DeleteForeverIcon />
      </Button>
      <Button>
        <EditIcon />
      </Button>
    </Box>
  ) : null;
}
