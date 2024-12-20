// import "./category-items.styles.scss";

// import "./categories.style.scss";

// import Directory from "./components/directory/directory.components";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";

import SignIn from "./routes/sign-in/sign-in.components";

import Home from "./routes/home/home.component";

// const Shop = () => {
//   return <h1>Hello shop</h1>;
// };
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
