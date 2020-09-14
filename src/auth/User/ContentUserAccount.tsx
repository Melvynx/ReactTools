import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import { TypeAuthDoc } from "../../utils/constante";
import Uservalue from "../utils/Uservalue";

type TypeUserAccount = {
  auth: any;
  authDoc: TypeAuthDoc;
  onClose: Function;
  onLogout: Function;
  onAdmin: Function;
};

export default function UserAccount({
  auth,
  onClose,
  authDoc,
  onLogout,
  onAdmin
}: TypeUserAccount) {
  return (
    <>
      <DialogTitle>Hi {auth.displayName}</DialogTitle>
      <DialogContent>
        <Uservalue label="Email adresse">{auth.email}</Uservalue>
        <Uservalue label="User Group">{authDoc.group}</Uservalue>
        <Uservalue label="Account created at">
          {new Date(authDoc.created_at).toLocaleString()}
        </Uservalue>
      </DialogContent>
      <DialogActions>
        {authDoc.group === "admin" && (
          <Button color="primary" onClick={() => onAdmin()}>
            Admins tools
          </Button>
        )}
        <Button color="primary" onClick={() => onLogout()}>
          Logout
        </Button>
        <Button color="secondary" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </>
  );
}
