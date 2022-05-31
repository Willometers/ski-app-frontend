import { createAsyncThunk } from "@reduxjs/toolkit"
import FiveDayAPI from "./FiveDayAPI"
import {useHistory} from 'react-router-dom'


export const fetchFiveDay = createAsyncThunk("weather/fetchweather", (zipcode = ["13066"]) => {
    console.log("jello")
    const history = useHistory()

    return fetch(`${FiveDayAPI}&q=${zipcode}&days=5&aqi=no&alerts=no`)
        .then((res) => res.json())
        .then((res) => res)
      
        .then(history.push("/fiveday"))
        .then(console.log("wtf"))

});

