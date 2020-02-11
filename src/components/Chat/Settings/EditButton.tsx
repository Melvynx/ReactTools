import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Dialog, DialogTitle, DialogActions, DialogContent } from "@material-ui/core";
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

  const { editValue, onValue } = firebaseHelper(path);

  useEffect(() => {
    onValue((topic: any) => {
      if (topic) {
        setMessage(topic.message);
        setTitle(topic.title);
        setTopic(topic);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editTopic = () => {
    editValue({
      date: topic.date,
      message: message,
      title: title,
      user: topic.user,
      user_id: topic.user_id,
      answer: topic.answer ? topic.answer : {}
    });
    setOpen(false);
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
          />
          <InputChat
            label="New content"
            multiline
            fullWidth
            onChange={(event: any) => setMessage(event.target.value)}
            value={message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={editTopic} color="secondary">
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
