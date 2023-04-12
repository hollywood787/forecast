import React from "react";
import "./favorites.css";
import FavoriteCity from "./favoriteCity/favoriteCity";
import { store } from "../../../js/store";

export default function Favorites() {
  const items = JSON.parse(localStorage.getItem("favoriteCity"));

  const arrayCitys = store.getState();

  return (
    <div className="favorits-container">
      <div className="favorits-title">
        <h1>Added Locations:</h1>
      </div>
      <div className="favorits-city">
        {arrayCitys &&
          items.map((item) => (
            <FavoriteCity
              key={item}
              cityItem={item}
            />
          ))}
      </div>
    </div>
  );
}
