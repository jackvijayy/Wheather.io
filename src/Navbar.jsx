import {  useState } from "react"
import { githubicon, logo, searchicon,  } from "./Assets"
import { useWeather } from "./Context/WeatherContext";



const Navbar = () => {
  const [city, setcity] = useState("");
  const {fetchWeatherData} =useWeather();

  const handlesearch=()=>{
    
    fetchWeatherData(city)
    
    console.log(fetchWeatherData(city))
  }
  
  return (
    <div className="w-full flex  max-md:gap-6 items-center ">
        <div className="flex items-center">
            <img src={logo} alt="logo" />
            <h1 className="font-bold md:text-3xl">weatherio</h1>
        </div>
        <div className="flex relative md:flex-1
        items-center justify-center md:px-2 lg:px-10 gap-3">
            <input type="text"
            value={city}
            onChange={(e)=>setcity(e.target.value)}
             placeholder="Search City"
            className=" w-full border border-[#37393f] p-2  outline-none
             rounded-2xl bg-transparent px-5"  />
            <img src={searchicon} alt=""  width={30} height={30} className=" "
            onClick={handlesearch}
            />

        </div>
        <div className="">
            <img src={githubicon} alt=""  width={30} height={30} />
        </div>
    </div>
  )
}

export default Navbar