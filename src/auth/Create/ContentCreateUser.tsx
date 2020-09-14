import React, { useState } from "react";
import {
  DialogContent,
  DialogActions,
  Button,
  DialogTitle
} from "@material-ui/core";
import {
  checkEmail,
  checkUsername,
  checkPassword,
  checkConfirmPassword
} from "../utils/checkUser";
import { authHelper } from "../../utils/authHelper";
import InputUser from "../utils/InputUser";

type TypeContentCreateUser = {
  onClose: Function;
  onLogin: Function;
};

export default function ContentCreateUser({
  onClose,
  onLogin
}: TypeContentCreateUser) {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [helperEmail, setHelperEmail] = useState<string>("");
  const [helperUsername, setHelperUsername] = useState<string>("");
  const [helperPassword, setHelperPassword] = useState<string>("");
  const [helperConfirmedPassword, setHelperConfirmedPassword] = useState<string>("");

  const submit = () => {
    const validationEmail = checkEmail(email);
    const validationUsername = checkUsername(username);
    const validaionPassword = checkPassword(password);
    const validationConfirmpassword = checkConfirmPassword(
      password,
      confirmedPassword
    );

    if (
      validationEmail.state &&
      validaionPassword.state &&
      validationConfirmpassword.state &&
      validationUsername.state
    ) {
      const { create } = authHelper();
      create(email, password, username, (error: any) => {
        setHelperEmail(error.message);
      });
    } else {
      setHelperUsername(validationUsername.helperText);
      setHelperEmail(validationEmail.helperText);
      setHelperPassword(validaionPassword.helperText);
      setHelperConfirmedPassword(validationConfirmpassword.helperText);
    }
  };

  return (
    <>
      <DialogTitle>Create an account !</DialogTitle>
      <DialogContent>
        <InputUser
          value={username}
          label="Username"
          onChange={(event: any) => setUsername(event.target.value)}
          helperText={helperUsername}
        />
        <InputUser
          value={email}
          label="Email"
          type="email"
          onChange={(event: any) => setEmail(event.target.value)}
          helperText={helperEmail}
        />
        <InputUser
          value={password}
          label="Password"
          type="password"
          onChange={(event: any) => setPassword(event.target.value)}
          helperText={helperPassword}
        />
        <InputUser
          value={confirmedPassword}
          label="Confirm password"
          type="password"
          onChange={(event: any) => setConfirmedPassword(event.target.value)}
          helperText={helperConfirmedPassword}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={() => onLogin()}>
          Already have a account
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
