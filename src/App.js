import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";

import Authentication from "./routes/authentication/authentication.components.jsx";

import Home from "./routes/home/home.component";

// const Shop = () => {
//   return <h1>Hello shop</h1>;
// };
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
