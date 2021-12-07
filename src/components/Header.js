import React from "react";
import { NavLink } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Streamy
      </NavLink>

      <div className="right menu">
        <NavLink to="/" className="item">
          All Streams
        </NavLink>
        <GoogleAuth />
      </div>
    </div>
  );
}
