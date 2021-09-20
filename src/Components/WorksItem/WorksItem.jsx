import React from "react";

export default function WorksItem({ title, desc, icon, img, id }) {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={icon} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
