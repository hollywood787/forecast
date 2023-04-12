import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
        <Link to="/">Go to Back</Link>
      <h2>Что за программулька?</h2>
      <p>Это самый обычный прогноз погоды. В поиске можешь задать любой город, который тебе нужен, также можешь сохранять города в избранное и возвращаться к ним позже</p>
    </div>
  );
}
