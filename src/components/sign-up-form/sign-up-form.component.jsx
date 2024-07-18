import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { CreateUserDocumentFromUserAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    //   <div>
    //     <h1> Sign Up with Email and Password </h1>
    //     <form onSubmit={handleSubmit}>
    //       <label> Display Name </label>
    //       <input
    //         type="text"
    //         required
    //         onChange={handleChange}
    //         name="displayName"
    //         value={displayName}
    //       />
    //       <label> Email </label>
    //       <input
    //         type="email"
    //         required
    //         onChange={handleChange}
    //         name="email"
    //         value={email}
    //       />
    //       <label> Password </label>
    //       <input
    //         type="password"
    //         required
    //         onChange={handleChange}
    //         name="password"
    //         value={password}
    //       />
    //       <label> Confirm Password </label>
    //       <input
    //         type="password"
    //         required
    //         onChange={handleChange}
    //         name="confirmPassword"
    //         value={confirmPassword}
    //       />
    //       <button type="submit"> Sign up</button>
    //     </form>
    //   </div>
    <div>
      <h1> Sign up form </h1>

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
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit"> Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
