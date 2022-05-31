import React from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchFiveDay } from "./FetchFiveDay";

function WeatherTile({ weather = [] }) {

    const history = useHistory()
    const dispatch = useDispatch()

    const showFiveDay = () => {
        console.log("show 5")
        dispatch(fetchFiveDay());
    }

    if (weather.location)
        return (
            <div onClick={showFiveDay}>
                <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
                <h3>Location: {weather.location.name}, {weather.location.region}</h3>
                <h4>Current Conditions: {weather.current.condition.text}</h4>
                <h4>Current Temp: {weather.current.temp_f}°</h4>
                <h4>Wind Gusts: {weather.current.wind_mph} mph</h4>
            </div>
        );
    else 
        return (
            <div>
                <h1>Weather:</h1>
                <h2 style={{color:'red'}}>invalid entry</h2>
            </div>
        );
}

export default WeatherTile;