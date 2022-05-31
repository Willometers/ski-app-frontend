import React from "react";
import { useSelector } from "react-redux";
import FiveDayTile from "./FiveDayTile";

const FiveDayWeather = () => {
    const weather = useSelector((state) => state.weather.entities);


    console.log("five", weather)

        // if(weather.weather)
        return (
            <div >
                <h1>5 Day Forecast: </h1>
                {/* {weather.weather.forecast.forecastday.map(
                (day) => < FiveDayTile day={day}/>)} */}
            </div>
        )
        // else
        // return(
        // <div>
        // <h2 style={{color:'red'}}>invalid entry</h2>
        // </div>
        // )

}

export default FiveDayWeather;