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
export const createUserProfile = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      console.log("user creating error", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
