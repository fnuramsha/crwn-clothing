import "./sign-in.styles.scss";
import Button from "../Button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  CreateUserDocumentFromUserAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../contexts/user-context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);

      // setCurrentUser(user);

      resetFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("You have entered invalid credentials");
      }
    }
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    CreateUserDocumentFromUserAuth(user);
  };
  return (
    <div>
      <h2> Already have an account? </h2>
      <span> Sign in With Email and Password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="default" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
