import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import InputChat from "../Utils/InputChat";

type TypeEditButton = {
  path: string;
};

export default function EditButton({ path }: TypeEditButton) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [topic, setTopic] = useState();
  const [error, setError] = useState<boolean>(false);

  const { editValue, onValue } = firebaseHelper(path);

  useEffect(() => {
    //Var when componend deleted, go true, and stop effect
    let deleted = false;
    onValue((topic: any) => {
      if (deleted) {
        return;
      }
      if (topic) {
        setMessage(topic.message);
        setTitle(topic.title);
        setTopic(topic);
      }
    });
    return () => {
      deleted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editTopic = () => {
    if (
      title.length >= 6 &&
      title.length <= 50 &&
      message.length >= 50 &&
      message.length <= 10000
    ) {
      editValue({
        date: topic.date,
        message: message,
        title: title,
        user: topic.user,
        user_id: topic.user_id,
        answer: topic.answer ? topic.answer : {}
      });
      setOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Edit this topic :</DialogTitle>
        <DialogContent>
          <InputChat
            label="New Title"
            fullWidth
            onChange={(event: any) => setTitle(event.target.value)}
            value={title}
            helperText={
              error ? "Title need to have between 5 and 50 caracteres." : ""
            }
          />
          <InputChat
            label="New content"
            multiline
            fullWidth
            onChange={(event: any) => setMessage(event.target.value)}
            value={message}
            helperText={
              error
                ? "Message need to have between 50 and 10000 caracteres."
                : ""
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={editTopic} color="secondary">
            Save
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            variant="contained"
          >
            Quit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
