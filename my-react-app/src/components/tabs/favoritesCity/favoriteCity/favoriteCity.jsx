import React, { useContext } from "react";
import "./favoriteCity.css";
import {
  localstorageCity,
  serverUrl,
  forecastURL,
  apiKey,
} from "../../../../js/consts";
import { getData } from "../../../../js/getData";
import { getForecast } from "../../../../js/getForecast";
import { WeatherContext } from "../../../../js/context";
import { store } from "../../../../js/store";
import { ActionsDeleteCity } from "../../../../js/actions";

export default function FavoriteCity(props) {
  const { cityItem } = props;

  const { setdataWeather, setFuture } = useContext(WeatherContext);

  function deleteCity(value) {
    const result = new Set(store.getState().addFavoriteCity);
    result.delete(value);
    localStorage.setItem(localstorageCity, JSON.stringify(Array.from(result)));
    store.dispatch(ActionsDeleteCity(Array.from(result)))
  }

  function changeCity() {
    getFirstData(cityItem);
  }

  async function getFirstData(city) {
    const urls = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const urlsForecast = `${forecastURL}?q=${city}&cnt=3&appid=${apiKey}&units=metric`;

    const data = await getData(urls);
    setdataWeather(data);

    const forecast = await getForecast(urlsForecast);
    setFuture(forecast);
  }

  return (
    <div>
      <div onClick={() => changeCity()} className="favorite__city">
        <h2>{cityItem}</h2>
        <button onClick={() => deleteCity(cityItem)}>X</button>
      </div>
    </div>
  );
}
