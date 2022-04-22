import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      {" * "}
      <NavLink to="/about">About</NavLink>
      {" * "}
      <NavLink to="/discovery">Discovery Page</NavLink>
    </div>
  );
}
