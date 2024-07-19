import React from "react";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  CreateUserDocumentFromUserAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in/sign-in.component";

const Authentication = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      {/* <button onClick={logGoogleUser}> Sign In with Google Popup</button> */}

      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
