

import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";

//create the context
const WeatherContext=createContext();

// Create a provider component

export const WeatherProvider = ({children})=>{
    const[weatherdata,setWeatherdata] =useState(null);
    const[loading,setloading]=useState(false)
    const[error,seterror]=useState();
  

 // Function to fetch weather data
const fetchWeatherData = async (city) =>{
    setloading(true)
    seterror(null)

    try {
        const response=await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',{
            params:{ q:city,days:'3'},
            headers: {
                'x-rapidapi-key': 'c1b4e57747msh5e6b54b382d31e5p1740cdjsn7177b2c8a432',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
              }
        });
        setWeatherdata(response.data)
        console.log(response.data);

        
    } catch (error) {
        seterror(error)
        
    }
    finally{
        setloading(false)

    }
   
    };
    
    return(
        <WeatherContext.Provider value={{weatherdata,error,loading,fetchWeatherData}}>
            {children}

        </WeatherContext.Provider>
    )
}
    export const useWeather = () => useContext(WeatherContext) 