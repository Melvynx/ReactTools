import * as firebase from "firebase";
import "firebase/database";

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
