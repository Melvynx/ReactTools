import React, { useState } from "react";
import { DialogContent, DialogActions, Button, DialogTitle } from "@material-ui/core";
import InputChat from "../../components/Chat/Utils/InputChat";
import { checkEmail } from "../utils/checkUser";
import { authHelper } from "../../utils/authHelper";

type TypeContentCreateUser = {
  onClose: Function;
  onCreate: Function;
};

export default function ContentLoginUser({ onClose, onCreate }: TypeContentCreateUser) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [helperEmail, setHelperEmail] = useState<string>("");
  const [helperPassword, setHelperPassword] = useState<string>("");

  const submit = () => {
    const validationEmail = checkEmail(email);

    if (validationEmail.state) {
      const { login } = authHelper();
      login(email, password, (call: any) => {
        console.log(call);
        switch (call.code) {
          case "auth/wrong-password":
            setHelperPassword("");
            setHelperPassword("Wrong password.");
            break;
          case "auth/user-not-found":
            setHelperEmail("Email adresse was not found.");
            setHelperPassword("Password was not found");
            break;
          default:
        }
      });
    } else {
      setHelperEmail(validationEmail.helperText);
    }
  };

  return (
    <>
      <DialogTitle>Login to you're account.</DialogTitle>
      <DialogContent>
        <InputChat
          value={email}
          label="Email"
          fullWidth
          onChange={(event: any) => setEmail(event.target.value)}
          helperText={helperEmail}
        />
        <InputChat
          value={password}
          label="Password"
          fullWidth
          onChange={(event: any) => setPassword(event.target.value)}
          helperText={helperPassword}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={() => onCreate()}>
          Create a account
        </Button>
        <Button color="primary" onClick={submit}>
          Submit
        </Button>
        <Button color="secondary" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </>
  );
}
