import React from "react";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  CreateUserDocumentFromUserAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    CreateUserDocumentFromUserAuth(user);
    console.log({ user });
  };

  return (
    <div>
      <h1>I am Sign in page </h1>
      <button onClick={logGoogleUser}> Sign In with Google Popup</button>

      <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
