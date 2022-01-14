import React from "react";
import Weather from "./Weather";

function WeatherTile({ weather = [] }) {
  return (
    <div>
      {weather.map((data) => (
        <img key={data.id} src={data.url} alt="weather" />
      ))}
    </div>
  );
}

export default WeatherTile;