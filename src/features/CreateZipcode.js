import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchWeather } from "./FetchWeather"
import { zipcodeAdded } from "./weatherSlice"

export default function CreateZipcode() {
    const dispatch = useDispatch() 

    const [zipcode, setZipcode ] = useState("")

    function handleChange(e) {
        setZipcode(e.target.value)
    }

    function handleSubmit(e) {
        
        e.preventDefault()
        console.log("submitted", zipcode)
        dispatch(zipcodeAdded(zipcode))
        dispatch(fetchWeather(zipcode))
    }

    return (
        
        <div >
            <form onSubmit={handleSubmit}>
            <input placeholder="Search by Zipcode" 
            onChange={handleChange}/>
            </form>
        </div>

    )
}

        