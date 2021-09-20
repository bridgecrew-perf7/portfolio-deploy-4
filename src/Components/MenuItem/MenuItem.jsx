import React from "react";
import "./MenuItem.scss";

export default function MenuItem({ itemName, menuOpen, setMenuOpen }) {
  return (
    <li>
      <a href={"#" + itemName} onClick={() => setMenuOpen(false)}>
        {itemName}
      </a>
    </li>
  );
}
