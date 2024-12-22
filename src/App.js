// import "./category-items.styles.scss";

// import "./categories.style.scss";

// import Directory from "./components/directory/directory.components";

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
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
