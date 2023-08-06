import { useEffect, useState } from "react";
import weatherService from '../services/weather';

const CurrentLocation = () => {

const [currentTime, setCurrentTime] = useState(new Date());
const [weather, setWeather] = useState({});
const [geolocationError, setGeolocationError] = useState(false);

let getLocationPromise = () => new Promise((resolve, reject) => {

  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude
          let long = position.coords.longitude
          resolve({latitude: lat, 
                  longitude: long})
      },
      function(error) {
        reject(error.message);
      }
      )

  } else {
      reject("your browser doesn't support geolocation API")
  }
})

useEffect(() => {
  setTimeout(setCurrentTime(new Date()), 1000);
}, [currentTime])

useEffect(() => {
   getLocationPromise().then(async (coords) => { 
   const weatherRes = await weatherService.getUsingCoord([coords.latitude, coords.longitude]);
   setWeather(weatherRes);
  }).catch((error) => {
    setGeolocationError(error); 
  })
}, [])

if(geolocationError) {
  return (
    <>
      <h1>{geolocationError}</h1>
    </>
  )
}

return (
        <div className="weather-content">
        <div className="place text-end">{Object.keys(weather).length && 
          <>
            <p className="city"> {weather.name}</p>
            <p className="country">{weather.sys.country}</p>
          </>
        }

        </div>
        <div className="footer px-3">
          <div className="date-content">
            <p className="text-large">{currentTime.toLocaleTimeString()}</p>
            <p className="text-small">{currentTime.toDateString()}</p>
          </div>
          <p className="large1 text-end flex-grow-1">
            { Object.keys(weather).length &&  <>{weather.main.temp}<sup>o</sup>c </>}
          </p>
        </div>
      </div>
    )
}

export default CurrentLocation;