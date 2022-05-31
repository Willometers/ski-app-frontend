import APIKey from "./APIKey";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchWeather = createAsyncThunk("weather/fetchweather", (zipcode = "13066") => {

    return fetch(`${APIKey}&q=${zipcode}&aqi=no`)
        .then((res) => res.json())
        .then((weather) => dispatch(addSingleDay(weather)))
});
 
