import React from 'react'
import { useWeather } from '../Context/WeatherContext'

const Forecast = () => {

  //data Destructuring
  const{weatherdata,loading,error}=useWeather();

   //loading&error if true
    if (loading) return <div></div>;
    if (error) return <div></div>
    if (!weatherdata || !weatherdata.current || !weatherdata.location ||!weatherdata.forecast) return 
  <div className='text-3xl text-wrap absolute top-[50%] left-[50%] translate'>Please Enter the City Name</div>;
  return (
    <div className='flex max-md:flex-col gap-5 mt-5'>
      <div className='p-1'>
        <h4 className='mb-5'>3days Forecast</h4>
        <div className='px-10 py-8  rounded-xl items-center gap-12 lg:bg-gray'>

          <div className='flex justify-between gap-10 items-center mb-8'>
            <div className='flex items-center gap-5'>
              <img src={weatherdata.forecast.forecastday[0].day.condition.icon} alt="sun"  width={40}/>
              <span >{weatherdata.forecast.forecastday[0].day.avgtemp_c}°C</span>

            </div>
            <span>{weatherdata.forecast.forecastday[0].day.condition.text}</span>
            <span>{weatherdata.forecast.forecastday[0].date}</span>
          </div>

          <div className='flex justify-between gap-5 items-center mb-8 '>
            <div className='flex items-center gap-5'>
              <img src={weatherdata.forecast.forecastday[1].day.condition.icon} alt="sun"  width={40}/>
              <span>{weatherdata.forecast.forecastday[1].day.avgtemp_c}°C</span>

            </div>
            <span>{weatherdata.forecast.forecastday[1].day.condition.text}</span>
            <span>{weatherdata.forecast.forecastday[1].date}</span>
          </div>

          <div className='flex justify-between gap-5 items-center'>
            <div className='flex items-center gap-5'>
              <img src={weatherdata.forecast.forecastday[2].day.condition.icon} alt="sun"  width={40}/>
              <span>{weatherdata.forecast.forecastday[2].day.avgtemp_c}°C</span>

            </div>
            <span>{weatherdata.forecast.forecastday[2].day.condition.text}</span>
            <span>{weatherdata.forecast.forecastday[2].date}</span>
          </div>

        </div>

      </div>
      <div className='p-2'>
        <h2 className='mb-2'>24Hours Forecast</h2>
        <div className='p-3  rounded-xl'>
          <h4 className='mb-4'>Today At</h4>
          <div className='flex flex-wrap gap-2 max-md:gap-5'>
            <div className='bg-gray flex flex-col items-center px-6 py-3 rounded-xl gap-2'>
              <span>9pm</span>
              <img src={weatherdata.forecast.forecastday[0].hour[21].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[21].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>12Am</span>
              <img src={weatherdata.forecast.forecastday[0].hour[0].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[0].temp_c}C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>3Am</span>
              <img src={weatherdata.forecast.forecastday[0].hour[3].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[3].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>6Am</span>
              <img src={weatherdata.forecast.forecastday[0].hour[6].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[6].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>9Am</span>
              <img src={weatherdata.forecast.forecastday[0].hour[9].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[9].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center px-6 py-3 rounded-xl gap-2'>
              <span>12pm</span>
              <img src={weatherdata.forecast.forecastday[0].hour[12].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[12].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>3pm</span>
              <img src={weatherdata.forecast.forecastday[0].hour[15].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[15].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center px-6 py-3  rounded-xl gap-2'>
              <span>6pm</span>
              <img src={weatherdata.forecast.forecastday[0].hour[18].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[0].hour[18].temp_c}°C</span>
            </div>
          </div>

        </div>
        {/* //tommorrow */}

        <div className='p-3  rounded-xl'>
          <h4 className='mb-4'>Tommorow At</h4>
          <div className='flex flex-wrap gap-2 max-md:gap-5'>
            <div className='bg-gray flex flex-col items-center px-6 py-3 rounded-xl gap-2'>
              <span>9pm</span>
              <img src={weatherdata.forecast.forecastday[1].hour[21].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[21].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>12Am</span>
              <img src={weatherdata.forecast.forecastday[1].hour[0].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[0].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>3Am</span>
              <img src={weatherdata.forecast.forecastday[1].hour[3].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[3].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>6Am</span>
              <img src={weatherdata.forecast.forecastday[1].hour[6].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[6].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>9Am</span>
              <img src={weatherdata.forecast.forecastday[1].hour[9].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[9].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>12pm</span>
              <img src={weatherdata.forecast.forecastday[1].hour[12].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[12].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center  px-6 py-3 rounded-xl gap-2'>
              <span>3pm</span>
              <img src={weatherdata.forecast.forecastday[1].hour[15].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[15].temp_c}°C</span>

            </div>
            <div className='bg-gray flex flex-col items-center px-6 py-3  rounded-xl gap-2'>
              <span>6pm</span>
              <img src={weatherdata.forecast.forecastday[1].hour[18].condition.icon} alt="" width={30} />
              <span>{weatherdata.forecast.forecastday[1].hour[18].temp_c}°C</span>

            </div>



          </div>

        </div>





      </div>


    </div>
  )
}

export default Forecast