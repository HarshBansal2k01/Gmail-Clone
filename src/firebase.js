import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbj99gm8w9dDBI2VSFWnpYicvBFzs7gVA",
    authDomain: "clone-682d4.firebaseapp.com",
    projectId: "clone-682d4",
    storageBucket: "clone-682d4.appspot.com",
    messagingSenderId: "248610760320",
    appId: "1:248610760320:web:ac825058be7beb205de865",
    measurementId: "G-33Z4L85H3B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth,provider};