import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { addNFT } from "./redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Shop, ShoppingCart } from "./pages";

const App = () => {
  return (
    <div>
      <Link to="/"> Shop</Link>
      <Link to="/cart"> ShoppingCart</Link>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default App;
