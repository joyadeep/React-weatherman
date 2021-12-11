import React, { useState, useEffect } from 'react'
import "./body.css";
// import {BsCloudy} from 'react-icons/bi';
import {GiWindsock} from 'react-icons/gi';
import {WiHumidity,WiSunrise,WiSunset} from 'react-icons/wi';
import axios from 'axios';
import { Header } from '../header/Header'

export const Body = () => {
    const [city,setCity]=useState("kathmandu");
    const [tempData,setTempData]=useState({});
   
    useEffect(()=>{
        
        const weather=async()=>{
            try {
            
                const weatherData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=650254cd5cfcf20e6671de3cb840785f`);
            setTempData(weatherData.data);
            console.log(weatherData.data);
            } catch (error) {
                console.log(`error : ${error}`);
            }
            
        }
        weather();

    },[city]);
    return (
        <>
            <Header setCity={setCity} />
           
           <div className="b-container">
            <div className="b-left">left</div>


            {/* <div className="b-center">
                <div className="b-center-container">
                <div className="city">{tempData.name}, <span style={{fontSize:"17px"}}>{tempData.sys.country}</span></div>
                <div className="temp">
                    {Math.round(tempData.main.temp)} <sup>o</sup>C
                </div>
                <div className="minmax">{Math.round(tempData.main.temp_max)} <sup>o</sup> / {Math.round(tempData.main.temp_min)} <sup>o</sup> </div>
                <div className="status">windy </div>
                <div className="feels">feels like  <sup>o</sup>C</div>
                <div className="extras">
                    <div className="wind"><span className="icon"> <GiWindsock/> </span> 1.5 <sub style={{fontSize:"15px"}}>km/hr</sub> </div>
                    <div className="humidity"> <span className="icon"><WiHumidity/></span> 4 </div>
                    <div className="sunrise"><span className="icon"><WiSunrise/></span> 6:30</div>
                    <div className="sunset"><WiSunset/> 6:30</div>

                </div>
                
                <h1>{tempData.name}</h1>
                </div>

            </div> */}
            
            
            <div className="b-right">right</div>
           </div>


            {/* <h1>{tempData.name}</h1>
            {/* <h1>{tempData}</h1> */}

             </>
    )
}
