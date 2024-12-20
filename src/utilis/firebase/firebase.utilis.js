import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMZ19036B90Nu6T-c8D98fLn8SlDZKIc",
  authDomain: "crwn-clothing-db-34bd1.firebaseapp.com",
  projectId: "crwn-clothing-db-34bd1",
  storageBucket: "crwn-clothing-db-34bd1.firebasestorage.app",
  messagingSenderId: "709626005216",
  appId: "1:709626005216:web:6ae95d403ad586c248b285",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
