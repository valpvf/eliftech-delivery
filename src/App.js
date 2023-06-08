import "./share/styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Shop, ShoppingCart } from "./pages";
import MainLayuot from "./components/MainLayuot/MainLayuot";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayuot />}>
        <Route index element={<Shop />} />
        <Route path=":cart" element={<ShoppingCart />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
