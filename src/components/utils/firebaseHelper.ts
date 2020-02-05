import * as firebase from "firebase";

export function firebaseHelper(path: string) {
  const database = firebase.database();
  const node = database.ref().child(path);

  function onValue(callback: Function) {
    node.on("value", snapshot => callback(snapshot.val()));
  }

  function push(value: any, onComplete?: (a: Error | null) => any) {
    node.push(value, onComplete);
  }

  return {
    onValue,
    push,
    node
  };
}

export function firebaseAuthHelper(email?: string, password?: string) {
  const auth = firebase.auth();
  const db = firebase.firestore();

  function create() {
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred: any) => {
          db.collection("users")
            .doc(cred.user.uid)
            .set({ group: "user" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  function authListener(callback: Function) {
    auth.onAuthStateChanged(firebaseUser => {
      callback(firebaseUser);
    });
  }

  return {
    create,
    authListener
  };
}
