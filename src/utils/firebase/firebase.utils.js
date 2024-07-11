// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0QBq-vfuoukkgU99HpQ2hIPy_-p1NeyU",
  authDomain: "crwn-clothing-db-9920b.firebaseapp.com",
  projectId: "crwn-clothing-db-9920b",
  storageBucket: "crwn-clothing-db-9920b.appspot.com",
  messagingSenderId: "77840018246",
  appId: "1:77840018246:web:b14d84b8e9accace315347",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// In order to use Google auth provider, so create provider object using GoogleAuthProvider class
const provider = new GoogleAuthProvider();
// This is primarliy for the Google Auth provider
provider.setCustomParameters({
  prompt: "select_account", //everytime somebody interacts with our provider, we're forcing them to select an account
});

// I have a question in this

export const auth = getAuth(); //You won't need multiple authentication that's why we write this
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //Export keyword is used to make db accessible in other parts of your application

export const CreateUserDocumentFromUserAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Request failed", error.message);
    }
  }
  return userDocRef;
};
