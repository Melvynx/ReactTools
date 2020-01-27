import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyDsOFUozarCcd3IHlaWxm0IBlQQpEU_5ZM",
    authDomain: "melvynx1.firebaseapp.com",
    databaseURL: "https://melvynx1.firebaseio.com",
    projectId: "melvynx1",
    storageBucket: "melvynx1.appspot.com",
    messagingSenderId: "250871298406",
    appId: "1:250871298406:web:94543018676423fd4af0a7",
    measurementId: "G-1MHT0RHERX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
})();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
