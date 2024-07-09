// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
