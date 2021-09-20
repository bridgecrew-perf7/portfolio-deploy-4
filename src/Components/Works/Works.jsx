import React, { useState } from "react";
import "./Works.scss";
import WorksItem from "../WorksItem/WorksItem";
import { worksShowcase } from "./../../data";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = worksShowcase;

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <WorksItem
              title={d.title}
              desc={d.desc}
              icon={d.icon}
              img={d.img}
              id={d.id}
            />
          );
        })}
      </div>
      <img
        src="assets/down.png"
        className="arrow left"
        alt=""
        onClick={() => {
          handleClick("left");
        }}
      />
      <img
        src="assets/down.png"
        className="arrow right"
        alt=""
        onClick={() => {
          handleClick("right");
        }}
      />
    </div>
  );
}
