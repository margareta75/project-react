import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo-List</h1>
    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

export default Header;
