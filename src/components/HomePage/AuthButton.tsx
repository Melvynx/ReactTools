import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import CreateUser from "../../auth/CreateUser";
import { firebaseAuthHelper } from "../utils/firebaseHelper";

export default function AuthButton() {
  const [open, setOpen] = useState<boolean>(false);
  const [authEmail, setAuthEmail] = useState<string>("");

  const { authListener } = firebaseAuthHelper();

  useEffect(() => {
    authListener((auth: any) => {
      console.log(auth);
      setAuthEmail(auth.email);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box position="absolute" top={10} left={10}>
      {authEmail.length > 1 ? <Typography>{authEmail}</Typography> : ""}
      <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
        Sign
      </Button>

      <CreateUser open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
