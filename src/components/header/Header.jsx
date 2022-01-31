import React, { useState } from 'react'
import {TiWeatherSnow} from 'react-icons/ti';
import "./header.css";
export const Header = ({setCity}) => {
    const[search,setSearch]=useState("");
    const setdata=()=>{
        setCity(search);
        setSearch("");
    }
    return (
        <>
           <div className="header">
            <div className="h-contents">
              <div className="h-logo"> <TiWeatherSnow/> </div>
              <div className="h-title">WeatherMan</div>
              <div className="h-search">
                <div className="h-bar">
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
                <div className="h-icon">
                <button onClick={setdata}>Search</button>
                </div>
              </div>
            </div>
            </div> 
        </>
    )
}
