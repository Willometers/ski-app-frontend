// weather API key = c541fab451df4f9f82220428220701
// https://api.worldweatheronline.com/premium/v1/ski.ashx?key=c541fab451df4f9f82220428220701&q={#location}&format=json&num_of_days=7

import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './features/NavBar';
import Weather from './features/Weather';
import SearchForm from './features/CreateZipcode';

function App() {

  return (
    <div>
      <NavBar/>
      <SearchForm />
      <Weather/>
    </div>
  );

}

export default App;
