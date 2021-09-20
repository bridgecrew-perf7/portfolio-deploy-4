import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem
          itemName="intro"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuItem
          itemName="portfolio"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuItem
          itemName="works"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuItem
          itemName="contact"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </ul>
    </div>
  );
}
