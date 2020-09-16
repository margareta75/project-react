import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo-List</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "white",
  textAlign: "center",
  padding: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Header;
