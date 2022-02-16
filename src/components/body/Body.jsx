import React, { useState, useEffect } from 'react'
import "./body.css";
import {GiWindsock} from 'react-icons/gi';
import {WiHumidity,WiSunrise,WiSunset} from 'react-icons/wi';
import { Header } from '../header/Header'

export const Body = () => {
    const [city,setCity]=useState("kathmandu");
    const [tempData,setTempData]=useState(null);
   
    useEffect(()=>{
        
        const weather=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=650254cd5cfcf20e6671de3cb840785f`;
            const weatherData=await fetch(url);
            const resjson=await weatherData.json();
            setTempData(resjson);            
        }
        weather();

    },[city]);
    return (
        <>
            <Header setCity={setCity} />
          
          {
              !tempData?<div className='loading'>Loading</div>:
              <>
              <div className="b-container">
            <div className="b-left">left</div>


            <div className="b-center">
                <div className="b-center-container">
                <div className="city">{tempData.name}, <span style={{fontSize:"17px"}}>{tempData.sys.country}</span></div>
                <div className="temp">
                    {Math.round(tempData.main.temp)} <sup>o</sup>C
                </div>
                <div className="minmax">{Math.round(tempData.main.temp_max)} <sup>o</sup> / {Math.round(tempData.main.temp_min)} <sup>o</sup> </div>
                <div className="status">{tempData.weather[0].main} </div>
                <div className="feels">feels like  {tempData.main.feels_like}<sup>o</sup>C</div>
                <div className="extras">
                    <div className="wind"><span className="icon"> <GiWindsock/> </span> {tempData.wind.speed} <sub style={{fontSize:"15px"}}> km/hr</sub> </div>
                    <div className="humidity"> <span className="icon"><WiHumidity/></span> {tempData.main.humidity} </div>
                    {/* <div className="sunrise"><span className="icon"><WiSunrise/></span> {new Date(tempData.sys.sunrise).toLocaleTimeString()}</div>
                    <div className="sunset"><WiSunset/>  {new Date(tempData.sys.sunset).toLocaleTimeString()}</div> */}

                </div>
                
                </div>

            </div>
            
            
            <div className="b-right">right</div>
           </div>

              </>
          }
           


             </>
    )
}
