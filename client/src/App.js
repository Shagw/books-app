import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage.js";
import NavbarPage from "./components/Navbar";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage.js";
import WishlistItems from "./Pages/WishList";
import AllProducts from "./Pages/AllProducts.js";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarPage />
        <Routes>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/wishlist" element={<WishlistItems/>}/>
          <Route path="/all-products" element={<AllProducts/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
