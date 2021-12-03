import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <nav>
        <NavLink to="/" className="item">
          Stream
        </NavLink>
      </nav>
      <div className="right menu">
        <nav>
          <NavLink to="/" className="item">
            All Strems
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
