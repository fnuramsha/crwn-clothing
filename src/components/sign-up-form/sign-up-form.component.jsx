import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { CreateUserDocumentFromUserAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../Button/button.component";
import "./sign-up-form.styles.scss";
// import { useContext } from "react";
// import { UserContext } from "../contexts/user-context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  // const { setCurrentUser } = useContext(UserContext);
  console.log("hit");

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword != password) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // This is the old method of user context
      // setCurrentUser(user);
      CreateUserDocumentFromUserAuth(user, { displayName });
      resetFields();
      console.log({ user });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create user, email is already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  // This approach ensures that when an input field changes, the corresponding property in the
  // formFields state object is updated correctly based on the name attribute of the input field.
  // Also we write name in array to get the dynamic keys otherwise it will take name as a key
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2> Don't have an account ? </h2>
      <span> Sign Up with Email and Password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="default" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
