import React, { useState } from "react";
import { Dialog, DialogTitle, Typography, DialogActions, Button } from "@material-ui/core";

import { firebaseAuthHelper } from "../components/utils/firebaseHelper";
import InputChat from "../components/Chat/Utils/InputChat";

type TypeCreateUser = {
  open: boolean;
  onClose: Function;
};

export default function CreateUser({ open, onClose }: TypeCreateUser) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = () => {
    const { create } = firebaseAuthHelper(email, password);
    create();
  };

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>
        Create an account !
        <InputChat
          value={email}
          label="email"
          fullWidth
          onChange={(event: any) => setEmail(event.target.value)}
        />
        <InputChat
          value={password}
          label="password"
          fullWidth
          onChange={(event: any) => setPassword(event.target.value)}
        />
      </DialogTitle>
      <DialogActions>
        <Button onClick={submit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
