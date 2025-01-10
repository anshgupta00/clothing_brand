import { createContext, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { createAction } from "./utilis/firebase/reducer/reducer.utilis.js";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utilis/firebase/firebase.utilis";

import Home from "./routes/home/home.component";

import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.components.jsx";

import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
