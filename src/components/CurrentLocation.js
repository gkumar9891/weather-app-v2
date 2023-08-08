import { useState } from "react";

const CurrentLocation = ({ weather, geolocationError }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => setCurrentTime(new Date()), 1000);

  if (geolocationError) {
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
          {Object.keys(weather).length && <>{weather.main.temp}<sup>o</sup>c </>}
        </p>
      </div>
    </div>
  )
}

export default CurrentLocation;