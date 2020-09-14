import React from "react";
import { DialogTitle } from "@material-ui/core";
import { TypeAuthDoc } from "../../utils/constante";


type TypeAdminTools = {
  auth: any;
  authDoc: TypeAuthDoc;
  onClose: Function;
  onAdmin: Function;
};

export default function AdminTools({auth, authDoc, onClose, onAdmin}: TypeAdminTools) {
  return (
    <>
      <DialogTitle>Admin tools</DialogTitle>
    </>
  );
}
