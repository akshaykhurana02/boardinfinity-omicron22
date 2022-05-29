import React from "react";
import ipl_logo from "../images/ipl-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <div>
          <img height="20" width="40" src={ipl_logo} alt="ipl-logo" />
        </div>
      </Link>
      <div className="right menu">
        <Link to="/teams" className="item">
          Teams
        </Link>
        <Link to="/winners" className="item">
          Winners
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/contact-us" className="item">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
