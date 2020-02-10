import React, { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import { authHelper } from "../../utils/authHelper";
import ContentUserAccount from "./ContentUserAccount";
import ContentLoginUser from "../Login/ContentLoginUser";
import ContentCreateUser from "../Create/ContentCreateUser";
import { TypeAuthDoc } from "../../utils/constante";

type TypeCreateUser = {
  open: boolean;
  onClose: Function;
};

export default function User({ open, onClose }: TypeCreateUser) {
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isCreate, setCreate] = useState<boolean>(false);
  const [auth, setAuth] = useState<any>();
  const [authDoc, setAuthDoc] = useState<TypeAuthDoc>({
    group: "",
    created_at: 0,
    username: ""
  });

  const { authListener, getCollection, logout } = authHelper();

  const toggleCreate = (state: boolean) => {
    setCreate(state);
  };

  const onLogout = () => {
    logout();
  };

  useEffect(() => {
    authListener((auth: any) => {
      if (auth) {
        setAuth(auth);
        setLogin(true);
        console.log("uid", auth.uid);
        getCollection(auth.uid, (doc: TypeAuthDoc) => setAuthDoc(doc));
      } else {
        setLogin(false);
        setAuth(null);
        setAuthDoc({ group: "", created_at: 1, username: "" });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog open={open} onClose={() => onClose()} fullWidth>
      {isLogin ? (
        <ContentUserAccount onClose={onClose} auth={auth} authDoc={authDoc} onLogout={onLogout} />
      ) : isCreate ? (
        <ContentCreateUser onClose={onClose} onLogin={() => toggleCreate(false)} />
      ) : (
        <ContentLoginUser onClose={onClose} onCreate={() => toggleCreate(true)} />
      )}
    </Dialog>
  );
}
