import React from "react";

function WeatherTile({ weather = [] }) {

    console.log("Tile", weather.location)
    console.log("Tile", weather.current)

    if (weather.location)
        return (
            <div>
            <h1>Weather:</h1>
            <h2>Location: {weather.location.name}, {weather.location.region}</h2>
            <h3>Current Temp: {weather.current.temp_f}°</h3>
            <h3>Wind: {weather.current.wind_mph} mph</h3>
            </div>
        );
    else 
        return (
            <div>
            <h1>Weather:</h1>
            <h2 style={{color:'red'}}>loading...</h2>
            </div>
        );
}

export default WeatherTile;