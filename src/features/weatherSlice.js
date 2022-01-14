import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import APIKey from "./APIKey";
// import zipcode for search query from search form or from current location thingy

// hide key in gitignore file
export const fetchWeather = createAsyncThunk("weather/fetchweather", () => {
    return fetch(`https://api.worldweatheronline.com/premium/v1/ski.ashx?key=${APIKey}q=${zipcode}`)
    .then((res) => res.json())
    .then((res) => console.log(res))
});

console.log(APIKey)

const weatherSlice = createSlice({
    name: "weather",
    initialState: {

    }
// initial state
// areducers

})

// export actions

export default weatherSlice.reducer;