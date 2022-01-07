// weather API key = c541fab451df4f9f82220428220701
// https://api.worldweatheronline.com/premium/v1/ski.ashx?key=c541fab451df4f9f82220428220701&q={#location}&format=json&num_of_days=7

import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import NavBar from './NavBar';

function App() {

  return (
    <div>
      <NavBar/>
      <Route exact path="/"><LogIn/></Route>
    </div>
  );

}

export default App;
