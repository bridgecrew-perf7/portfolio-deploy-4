import React from "react";
import "./Topbar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            eren darıcı.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+90 507 890 6805</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ed.erendarici@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
