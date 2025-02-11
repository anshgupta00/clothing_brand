import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

//////////////////////////////////////////////////////
// import { useState } from "react";

// import FormInput from "../components/form-input/form-input.component";

// import Button from "../components/button/button.component";

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../utilis/firebase/firebase.utilis";

// // import { UserContext } from "../contexts/user.context";

// import "./sign-up-form.styles.scss";

// // const defaultFormFields = {
// //   displayName: "",
// //   email: "",
// //   password: "",
// //   confirmPassword: "",
// // };

// // const SignUpForm = () => {
// //   const [formFields, setFormFields] = useState(defaultFormFields);
// //   const { displayName, email, password, confirmPassword } = formFields;

// //   // const val = useContext(UserContext);

// //   // console.log("hit");
// //   // console.log(formFields);

// //   const { setCurrentUser } = useContext(UserContext);

// //   const resetFormFields = () => {
// //     setFormFields(defaultFormFields);
// //   };

// //   const handleSubmit = async event => {
// //     event.preventDefault();

// //     if (password !== confirmPassword) {
// //       alert("Please enter your password");
// //       return;
// //     }
// //     try {
// //       const { user } = await createAuthUserWithEmailAndPassword(
// //         email,
// //         password
// //       );

// //       setCurrentUser(user);

// //       await createUserDocumentFromAuth(user, { displayName });

// //       resetFormFields();
// //     } catch (error) {
// //       if (error.code === "auth/email-already-in-use") {
// //         alert("cannot create user:email already in use");
// //       } else {
// //         console.log("Error creating user.", error);
// //       }
// //     }
// //   };

// //   const handleChange = event => {
// //     const { name, value } = event.target;

// //     setFormFields({ ...formFields, [name]: value });
// //   };
// //   return (
// //     <div className="sign-up-container">
// //       <h2>Don't have an account?</h2>
// //       <span>Sign Up With Email and Password</span>

// //       <form onSubmit={handleSubmit}>
// //         {/* <label>Displayh Name </label> */}
// //         <FormInput
// //           label="Display Name"
// //           type="text"
// //           required
// //           onChange={handleChange}
// //           name="displayName"
// //           value={displayName}
// //         />

// //         {/* <label>Email</label> */}
// //         <FormInput
// //           label="Email"
// //           type="email"
// //           required
// //           onChange={handleChange}
// //           name="email"
// //           value={email}
// //         />
// //         {/*
// //         <label>Password </label> */}
// //         <FormInput
// //           label="Password"
// //           type="password"
// //           required
// //           onChange={handleChange}
// //           name="password"
// //           value={password}
// //         />
// //         {/*
// //         <label>Confirm Password </label> */}
// //         <FormInput
// //           label="Confirm Password"
// //           type="password"
// //           required
// //           onChange={handleChange}
// //           name="confirmPassword"
// //           value={confirmPassword}
// //         />

// //         <Button type="submit">Sign Up</Button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignUpForm;
// /////////////////////////////////////////

// const defaultFormFields = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const SignUpForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { displayName, email, password, confirmPassword } = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert("passwords do not match");
//       return;
//     }

//     try {
//       const { user } = await createAuthUserWithEmailAndPassword(
//         email,
//         password
//       );

//       await createUserDocumentFromAuth(user, { displayName });
//       resetFormFields();
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         alert("Cannot create user, email already in use");
//       } else {
//         console.log("user creation encountered an error", error);
//       }
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <div className="sign-up-container">
//       <h2>Don't have an account?</h2>
//       <span>Sign up with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label="Display Name"
//           type="text"
//           required
//           onChange={handleChange}
//           name="displayName"
//           value={displayName}
//         />

//         <FormInput
//           label="Email"
//           type="email"
//           required
//           onChange={handleChange}
//           name="email"
//           value={email}
//         />

//         <FormInput
//           label="Password"
//           type="password"
//           required
//           onChange={handleChange}
//           name="password"
//           value={password}
//         />

//         <FormInput
//           label="Confirm Password"
//           type="password"
//           required
//           onChange={handleChange}
//           name="confirmPassword"
//           value={confirmPassword}
//         />
//         <Button type="submit">Sign Up</Button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
