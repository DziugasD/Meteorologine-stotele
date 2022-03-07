import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// ID 
// REMOTE_ID 
// AMBIENT_TEMPERATURE DECIMAL
// GROUND_TEMPERATURE DECIMAL
// AIR_QUALITY DECIMAL
// AIR_PRESSURE DECIMAL
// HUMIDITY DECIMAL
// WIND_DIRECTION DECIMAL
// WIND_SPEED DECIMAL
// WIND_GUST_SPEED DECIMAL
// RAINFALL DECIMAL
// CURRENT_TIMESTAMP

function App() {
  get_latest_data()
  switchImages()
  const [weatherData, setWeatherData] = useState({"ID":0,"REMOTE_ID":0,"AMBIENT_TEMPERATURE":0,"GROUND_TEMPERATURE":0,"AIR_QUALITY":0,"AIR_PRESSURE":0,"HUMIDITY":0,"WIND_DIRECTION":0,"WIND_SPEED":0,"WIND_GUST_SPEED":0,"RAINFALL":0,"CREATED":"1970-01-01T00:00:00.000Z"})

  function get_latest_data(){
    axios.get('/latest_data').then(function (response) {
      console.log(response.data[0]);
      const wData = response.data[0]
      setWeatherData(wData)
    })
    .catch(function (error) {
      console.log(error);
    })
  }  
  setInterval(function(){
    get_latest_data()
    switchImages()
  }, 30000)


  function switchImages(){
    if(weatherData.GROUND_TEMPERATURE<1){
      setSelected(shirts.black)
    }
    else{
      setSelected(shirts.white)
    }
  }

  const white = require(`./assets/OOOO.jpg`);
  const black = require(`./assets/OIP.jpg`);
  const shirts = {white, black}
  const [selected, setSelected] = useState(shirts.white)


  return (
    <div className="App">
      <header className="App-header">
        <p>
          orai yra labai geri pvz . : {weatherData.GROUND_TEMPERATURE}
        </p>
        <img src={selected} alt='shirt' />
      </header>
    </div>
  );
}

export default App;
