import React, { useState } from "react";
import Search from "./components/search";
import Tabs from "./components/tabs/tabs";
import "./app.css";
import { WeatherContext } from "./js/context.js";
import { Link } from "react-router-dom";

function App() {
  const [dataWeather, setdataWeather] = useState("");
  const [display, setDisplay] = useState("tab-1");
  const [future, setFuture] = useState([]);

  function displayTab(value) {
    setDisplay(value);
  }

  return (
    <div className="App">
      <header>
        <Link to="/about">About</Link>
      </header>
      <Search setdataWeather={setdataWeather} setFuture={setFuture} />
        <div className="main__block">
          <WeatherContext.Provider
            value={{ setdataWeather, setFuture, future }}
          >
            <Tabs dataWeather={dataWeather} display={display} />
          </WeatherContext.Provider>
          <div className="left__block-bottom">
            <button onClick={() => displayTab("tab-1")}>Now</button>
            <button onClick={() => displayTab("tab-2")}>Details</button>
            <button onClick={() => displayTab("tab-3")}>Forecast</button>
          </div>
        </div>
    </div>
  );
}

export default App;
