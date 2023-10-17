import React from "react";
import "./navbar.css";
import cart from "./images/cart.png"; // Import your downloaded image
import location from "./images/location_icon.png";
import search from "./images/search.png";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>easemyhood</h2>
        </div>
        <div className="location">
          <h2>Location</h2>
          <select name="location">
            <option value="Coimbatore">Coimbatore</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div className="categories">
          <a href="#" className="cat">
            Categories
          </a>
        </div>
        <div className="search">
          <input type="search" placeholder="Search your item" />
          <a href="#" className="searchBtn">
            <img src={search} alt="search" className="src1" />
          </a>
        </div>
        <div className="login">
          <a href="#" className="cat">
            Login
          </a>
        </div>
        <div className="cart">
          <a href="#">
            <img src={cart} alt="your cart" />
          </a>
       
        <div className="MyCart">
        <a href="#">
            MyCart
          </a>
          </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
