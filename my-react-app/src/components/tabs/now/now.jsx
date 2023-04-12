import React from "react";
import Temperature from "./temperature";
import CityTitle from "./CityTitle";
import Imgage from "./image";
import "./now.css";

export default function Now({dataWeather, className }) {

  return (
    <div className={`left__block-top ${className}`}>
      <Temperature temperature={dataWeather.temperature} />
      <Imgage image={dataWeather.image} />
      <CityTitle
        namecity={dataWeather.name}
      />
    </div>
  );
}
