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

  function deleteValue() {
    node.remove();
  }

  function editValue(value: any) {
    node.set(value);
  }

  return {
    onValue,
    push,
    node,
    deleteValue,
    editValue
  };
}
