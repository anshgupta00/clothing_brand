// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utilis/firebase/firebase.utilis";

import "./authentication.styles.scss";

import SignUpForm from "../../sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
