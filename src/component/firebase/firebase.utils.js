import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCongMikOPrVXkQWJaschqjvoU_WnKv8KM",
  authDomain: "crwn-clothing-eead9.firebaseapp.com",
  projectId: "crwn-clothing-eead9",
  storageBucket: "crwn-clothing-eead9.appspot.com",
  messagingSenderId: "467616101815",
  appId: "1:467616101815:web:0d6b04de27b0e323ab2432",
  measurementId: "G-T07JZFL2MG",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
