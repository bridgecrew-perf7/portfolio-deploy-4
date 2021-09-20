import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import portfoliomenu from "./portfoliomenu.json";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  frontendPortfolio,
  backendPortfolio,
  gamePortfolio,
  mlPortfolio,
} from "../../data";

export default function Portfolio() {
  const menuList = portfoliomenu;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("featured");

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "ml":
        setData(mlPortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {menuList.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>

      <div className="container">
        {data.map((d) => {
          return <PortfolioItem itemName={d.title} imgLink={d.img} />;
        })}
      </div>
    </div>
  );
}
