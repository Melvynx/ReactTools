import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export function authHelper() {
  const auth = firebase.auth();
  const db = firebase.firestore();

  function create(
    email: string,
    password: string,
    user: string,
    callback: Function
  ) {
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred: firebase.auth.UserCredential) => {
          if (cred.user) {
            const localTime = new Date().getTime();
            db.collection("users")
              .doc(cred.user.uid)
              .set({ group: "user", created_at: localTime, username: user });

            cred.user.updateProfile({
              displayName: user
            });
          }
        })

        .catch(e => {
          callback(e);
        });
    }
  }

  async function login(email: string, password: string, callback: Function) {
    auth.signOut();
    auth.signInWithEmailAndPassword(email, password).catch(e => callback(e));
  }

  function authListener(callback: Function) {
    auth.onAuthStateChanged(firebaseUser => {
      callback(firebaseUser);
    });
  }

  function getCollection(uid: string, callback: Function) {
    db.collection("users")
      .get()
      .then((doc: any) => console.log("eoc", doc));

    return db
      .collection("users")
      .doc(uid)
      .get()
      .then(value => callback(value.data()));
  }

  function logout() {
    auth.signOut();
  }

  return {
    create,
    authListener,
    login,
    logout,
    getCollection
  };
}
