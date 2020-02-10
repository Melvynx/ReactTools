import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { firebaseHelper } from "../../../utils/firebaseHelper";
import { Redirect } from "react-router-dom";

type TypeDeleteButton = {
  path: string;
  needRedirect?: boolean;
};

export default function DeleteButton({ path, needRedirect }: TypeDeleteButton) {
  const [open, setOpen] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const { deleteValue } = firebaseHelper(path);

  const deleteTopic = () => {
    if (needRedirect) {
      setRedirect(true);
    }
    setTimeout(() => {
      deleteValue();
      setOpen(false);
    }, 100);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <DeleteForeverIcon />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are you're sure to delete this Topic ?</DialogTitle>
        <DialogActions>
          <Button onClick={deleteTopic} color="secondary">
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
      {redirect ? <Redirect to="/forum" /> : null}
    </>
  );
}
