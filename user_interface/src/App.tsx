import {useLayoutEffect, useEffect, useState } from 'react';
import axios from 'axios';
import {Telefonu_page, DregmeDiv, PapildomaDiv, TemperaturosDiv, VejasDiv, Saule_logo, Lietus_logo, Dregna_logo, Vejas_logo, Naktis_logo, Main_page } from './Temperaturosdivas'
import {Routes, Route, Navigate } from 'react-router-dom'

function App(){

  const [weatherData, setWeatherData] = useState({"ID":0,"REMOTE_ID":0,"AMBIENT_TEMPERATURE":0,"GROUND_TEMPERATURE":0,"AIR_QUALITY":0,"AIR_PRESSURE":0,"HUMIDITY":0,"WIND_DIRECTION":0,"WIND_SPEED":0,"WIND_GUST_SPEED":0,"RAINFALL":0,"CREATED":"1970-01-01T00:00:00.000Z"})
  const [logo, switchlogo] = useState(0)
  var today = new Date();
  var time = today.getHours();
  // console.log(weatherData)
  var link = 'http://192.168.56.229:5000/latest_data'

  function get_latest_data(){
    axios.get(link).then(function(response) {
      const wData = response.data[0]
      setWeatherData(wData)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  function changeLogo(){
    if (time < 20 || time > 6)
    {
      if(weatherData.AMBIENT_TEMPERATURE>10  && weatherData.WIND_SPEED < 9*3.6){
        switchlogo(0)
      }
      if(weatherData.RAINFALL>2.5){
        switchlogo(1)
      }
      if(weatherData.WIND_SPEED>=9*3.6){
        switchlogo(2)
      }    }
    else if (time < 6 || time > 20)
    {
      if(weatherData.WIND_SPEED < 10){
        switchlogo(3)
      }
    }
    else{
      switchlogo(0)
    }
  }
  function isMobile(a:number){
    if (a <700&&window.location.pathname =="/"){
      window.location.replace("/mobile");   
    }
    if(window.location.pathname =="/mobile"&&a >710){
      window.location.replace("/")
    }
  }
  
  const [size, setSize] = useState([705, 1000]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  

  useEffect(() => {
    get_latest_data()
    changeLogo()
  }, []);

  useEffect(() => {
    isMobile(size[0])
  }, [size]);

  useEffect(()=>{
    changeLogo()
  }, [weatherData])

  setInterval(function(){
    get_latest_data()
  }, 30000)


  return (
    <div >
      <Routes>
        <Route path="/" element={Main_page({logo:logo, AMBIENT_TEMPERATURE:weatherData.AMBIENT_TEMPERATURE, WIND_SPEED:weatherData.WIND_SPEED, WIND_GUST_SPEED:weatherData.WIND_GUST_SPEED,  RAINFALL: weatherData.RAINFALL, AIR_PRESSURE: weatherData.AIR_PRESSURE, HUMIDITY:weatherData.HUMIDITY})}/>
        <Route path="/mobile" element={Telefonu_page({f:logo, AMBIENT_TEMPERATURE:weatherData.AMBIENT_TEMPERATURE, WIND_SPEED:weatherData.WIND_SPEED, WIND_GUST_SPEED:weatherData.WIND_GUST_SPEED,  RAINFALL: weatherData.RAINFALL, AIR_PRESSURE: weatherData.AIR_PRESSURE, HUMIDITY:weatherData.HUMIDITY})}/>
      </Routes>
      
    </div>
  );
}




export default App;
