import React from "react";
import Now from "./now";
import Details from "./details";
import Forecast from "./forecast";
import "./tabs.css";
import Favorites from "./favoritesCity";

export default function Tabs(props) {
  const { dataWeather, display} = props;

  if (!dataWeather) return;

  return (
    <div className="tabs">
      {
        <Now
          className={display === "tab-1" ? "tabs-active" : "tab"}
          dataWeather={dataWeather}
        />
      }
      {
        <Details
          className={display === "tab-2" ? "tabs-active" : "tab"}
          dataWeather={dataWeather}
        />
      }
      {
        <Forecast
          className={display === "tab-3" ? "tabs-active" : "tab"}
          cityItem={dataWeather.name}
        />
      }
      <div className="favorites__city">
        <Favorites
          cityItem={dataWeather.name}
        />
      </div>
    </div>
  );
}
