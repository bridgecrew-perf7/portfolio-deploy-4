import React from "react";

export default function PortfolioItem({ itemName, imgLink }) {
  return (
    <div className="item">
      <img src={imgLink} alt="" />
      <h3>{itemName}</h3>
    </div>
  );
}
