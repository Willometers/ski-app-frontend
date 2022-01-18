import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeatherTile from "./WeatherTile";
import { fetchWeather } from "./FetchWeather";

function Weather() {
  const weather = useSelector((state) => state.weather.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  console.log("state", weather)

  return (
    <div className="App">
      <WeatherTile weather={weather} />
    </div>
  );
}

export default Weather;