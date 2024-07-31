import CurrentWeather from "./Components/CurrentWeather"
import Forecast from "./Components/Forecast"
import { WeatherProvider } from "./Context/WeatherContext"

import Navbar from "./Navbar"





const App = () => {
  
  return (
    <div className="md:px-3 lg:px-10">
     
     <WeatherProvider>

     
      <Navbar/>
      <CurrentWeather/>
      <Forecast/>
      </WeatherProvider>
    

      
     
     

    
     
      
    
      
     
      


    </div>


   
  )
}

export default App