import { signInWithGooglePopup } from "../../utilis/firebase/firebase.utilis";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1> Sign In-To Page</h1>
      <button onClick={logGoogleUser}>Sign-In-Google</button>
    </div>
  );
};

export default SignIn;
