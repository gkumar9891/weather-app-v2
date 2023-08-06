import { useEffect, useState } from "react";
const CurrentLocation = () => {

const [currentTime, setCurrentTime] = useState(new Date());
const [weather, setWeather] = useState({});

useEffect(() => {
  setTimeout(setCurrentTime(new Date()), 1000);
}, [currentTime])

function geLatLong() {
  let lat;
  let long;

  return [lat, long]
}

return (
        <div className="weather-content">
        <div className="place text-end">
          <p className="city">Vikaspuri</p>
          <p className="country">IN</p>
        </div>
        <div className="footer px-3">
          <div className="date-content">
            <p className="text-large">{currentTime.toLocaleTimeString()}</p>
            <p className="text-small">{currentTime.toDateString()}</p>
          </div>
          <p className="large1 text-end flex-grow-1">
            23<sup>o</sup>c
          </p>
        </div>
      </div>
    )
}

export default CurrentLocation;