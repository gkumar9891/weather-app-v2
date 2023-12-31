import { useRef, useState } from "react";
import weatherService from "../services/weather";
import { WEATHER_ICON_URL } from "../constants";


const SearchLocation = ({ weather, setWeather } ) => {
    const [city, setCity] = useState("");
    const weatherIcon = `${WEATHER_ICON_URL}/${weather.weather[0].icon}@2x.png`

    const handleCitySearch = async () => {
      try{
        const data = await weatherService.getUsingCityName(city);
        setWeather(data);
      } catch(error) {
         console.log(error);
      }
    }

    return (
        <div className="weather-content2">
            <div className="weather-info">
              <img className="icon" src={weatherIcon}/>
              <p className="weather-name">{Object.keys(weather).length && weather.weather[0].main}</p>
            </div>
            <div className="search">
              <form className="form" onSubmit={async (e) => {
                e.preventDefault()
                await handleCitySearch();
              }}>
                <div className="wrapper d-flex">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search any City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <p className="text-center">
              { Object.keys(weather).length && 
                <>
                  {weather.name}, {weather.sys.country}
                </>
              }
              <img className="icon w-25" src={weatherIcon}/>
              {/* <svg
                width={25}
                height={25}
                className="invert-1 ms-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 207.628 207.628"
                xmlSpace="preserve"
              >
                <circle cx="103.814" cy="103.814" r="45.868" />
                <path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368  S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368  s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z" />
                <path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385  C111.314,36.027,107.956,39.385,103.814,39.385z" />
                <path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385  C111.314,204.271,107.956,207.628,103.814,207.628z" />
                <path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5  S204.271,111.314,200.128,111.314z" />
                <path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5  S36.027,111.314,31.885,111.314z" />
                <path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242  c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z" />
                <path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243  c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z  " />
                <path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606  c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606  C175.757,178.687,173.838,179.419,171.918,179.419z" />
                <path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606  c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z" />
              </svg> */}
            </p>
            { Object.keys(weather).length && 
              <ul className="list">
                <li>
                  Tempreture <span className="float-end">{weather.main.temp} <sup>o</sup>c ({weather.weather[0].main})</span>
                </li>
                <li>
                  Humidity <span className="float-end">{weather.main.humidity}%</span>
                </li>
                <li>
                  Visibility <span className="float-end">{weather.visibility}ml</span>
                </li>
                <li>
                  Wind Speed <span className="float-end">{weather.wind.speed} km/h</span>
                </li>
              </ul>
            }
          </div>
    )
}

export default SearchLocation;