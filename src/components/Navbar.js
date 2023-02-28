import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="navText">Google 🔍 SEARCH ENGINE</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Navbar;
