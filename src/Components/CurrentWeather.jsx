import { dateicon, eyeicon, humidityicon, lattitudeicon, locateicon,longitudeicon, metericon, moonicon, pressureicon, sunicon, windicon } from "../Assets"
import { useWeather } from "../Context/WeatherContext"


const CurrentWeather = () => {

    const {weatherdata,loading,error } = useWeather();

    //loading&& error
    if (loading) return <div className="w-[100vw] h-[100vh] flex justify-center items-center"><div className="loader"></div></div>;
    if(error) return <div className="w-[100vw] h-[100vh] flex justify-center items-center"><div className="uppercase">oops! {error.message}</div></div>
    if (!weatherdata || !weatherdata.current || !weatherdata.location) return<div className="w-[100vw] h-[100vh] flex justify-center items-center"><span className="text-2xl uppercase">please Enter the city Name</span></div>

  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-10"> 
        {/* //First div */}
        <div className="p-4 rounded-xl lg:bg-gray  max-md:justify">
            <h4 className="text-white">Now</h4>
            <div className="flex gap-3 items-center max-md:gap-10">
                <h1 className="text-[5rem]">{weatherdata.current.temp_c}°C</h1>
                <img src={weatherdata.current.condition.icon} alt=""  width={100} height={80}/>
            </div>
            <h3 className="text-textgray">{weatherdata.current.condition.text}</h3>

            <div className="flex items-center mt-5 gap-1">
                <img src={dateicon} alt="date" width={30} />
                <h5 className="text-textgray">{weatherdata.location.localtime}</h5>
            </div>
            <div className="flex gap-1 items-center mt-5">
                <img src={locateicon} alt="location" width={30} />
                <h5 className="text-textgray">{weatherdata.location.country},{weatherdata.location.region}</h5>
            </div>
        </div>

        {/* // second  */}
        <div className="p-7 lg:bg-gray rounded-xl">
            <h3>Today HighLight</h3>
            <div className="flex flex-col lg:flex-row gap-5 mt-5">

                {/* //wind */}
                <div className=" bg-black p-3 rounded-xl">
                    <h5 className="mb-3 text-textgray">Wind</h5>

                    <div className="flex gap-5 items-center max-md:justify-between ">
                        <img src={windicon} alt=" wind" width={50} />
                        <div className="flex flex-col gap-2">
                            <h5 className="text-textgray text-center">kph</h5>
                            <span className="text-3xl">{weatherdata.current.wind_kph}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-textgray items-center">degree</h5>
                            <span className="text-3xl">{weatherdata.current.wind_degree}</span>
                        </div>

                        <div className="flex flex-col gap-2 ">
                            <h5 className="text-textgray items-center">Dir</h5>
                            <span className="text-2xl">{weatherdata.current.wind_dir}</span>
                        </div>
                    </div>

                </div>
                {/* //lat & lon */}
                <div className=" bg-black p-4 rounded-xl">
                    <h5 className="text-textgray mb-4">lat & Lon</h5>
                    <div className="flex gap-4 items-center max-lg:justify-between">
                        <div className="flex  items-center">
                            <img src={lattitudeicon} alt="" width={50} />
                            <span className="text-white text-2xl">{weatherdata.location.lat}</span>

                        </div>
                        <div className="flex  items-center">
                            <img src={longitudeicon} alt="" width={50} />
                            <span className="text-white text-2xl">{weatherdata.location.lon}</span>

                        </div>
                    </div>
                </div>
                {/* //sunrise & sunset */}
                <div className="bg-black p-4 rounded-xl">
                    <h4 className="text-textgray mb-5">Sunrise & Sunset</h4>
                    <div className="flex max-md:justify-between gap-4">

                        <div className="flex gap-4">
                          <img src={sunicon} alt="" width={50} />
                            <div className="flex  flex-col">
                                <h4 className="text-textgray mb-2">sunrise</h4>
                                <h2>{weatherdata.forecast.forecastday[0].astro.sunrise}</h2>
                            </div>
                        </div>  
                        
                       <div className="flex gap-4">
                            <img src={moonicon} alt="" width={50} />
                            <div className="flex  flex-col">
                                <h4 className="text-textgray mb-2">sunset</h4>
                                <h2>{weatherdata.forecast.forecastday[0].astro.sunset}</h2>
                            </div>
                        </div>
                </div>

            </div>
        </div>

        {/* //second-Wrap */}
        <div className=" p-4">
            <div className="flex flex-wrap justify-between gap-2">

                <div className="bg-black p-4 rounded-xl">
                    <h4 className="text-textgray mb-5">Humidity</h4>
                    <div className="flex items-center gap-5">
                        <img src={humidityicon} alt="humidity"  width={50}/>
                        <span className="text-3xl">{weatherdata.current.humidity}%</span>
                    </div>

                </div>
                <div className="bg-black p-4 rounded-xl">
                    <h4 className="text-textgray mb-5">pressure</h4>
                    <div className="flex items-center gap-5">
                        <img src={pressureicon} alt="humidity"  width={50}/>
                        <span className="text-3xl">{weatherdata.current.pressure_mb}hpa</span>
                    </div>

                </div>
                <div className="bg-black p-4 rounded-xl">
                    <h4 className="text-textgray mb-5">visibility</h4>
                    <div className="flex items-center gap-5">
                        <img src={eyeicon} alt="humidity" width={50} />
                        <span className="text-3xl">{weatherdata.current.vis_km}km</span>
                    </div>

                </div>
                <div className="bg-black p-4 rounded-xl">
                    <h4 className="text-textgray mb-5">feels Like</h4>
                    <div className="flex items-center gap-5">
                        <img src={metericon} alt="humidity" width={50} />
                        <span className="text-3xl">{weatherdata.current.feelslike_c}°C</span>
                    </div>

                </div>
               

            </div>




        </div>

    </div>
   


</div>
    
  )
}

export default CurrentWeather