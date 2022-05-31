import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './features/NavBar';
import SearchForm from './features/CreateZipcode';
import FiveDayTile from "./features/FiveDayWeather"
import Weather from './features/Weather';

function App() {

  return (
    <Router>
    <div>
      <NavBar />
      <SearchForm/>

      <Switch >
        <Route path="/fiveday"> {<FiveDayTile/>} </Route>
        <Route path="/"> {<Weather/>} </Route> 
      </Switch >
    </div>
    </Router>
  );

}
export default App;
