import APIKey from "./APIKey";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchWeather = createAsyncThunk("weather/fetchweather", (zipcode = "13066") => {

    return fetch(`${APIKey}&q=${zipcode}&aqi=no`)
    // shoudl i fetch weather in child componenents? why doesnt this have access to the store?
    .then((res) => res.json())
    .then((res) => res)
});