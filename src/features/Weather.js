import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeatherTile from "./WeatherTile";
import { fetchWeather } from "./weatherSlice";

function Weather() {
  const weather = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Weather</h1>
      <WeatherTile weather={weather} />
    </div>
  );
}

export default Weather;