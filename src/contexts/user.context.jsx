// import { createContext, useState } from "react";

// // as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ Children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{Children}</UserContext.Provider>;
// };

import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utilis/firebase/firebase.utilis";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
