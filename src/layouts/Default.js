import { useEffect, useState } from "react";
import CurrentLocation from "../components/CurrentLocation";
import SearchLocation from "../components/SearchLocation";
import weatherService from '../services/weather';

const Default = () => {
    const [weather, setWeather] = useState({});
    const [geolocationError, setGeolocationError] = useState(false);

    let getLocationPromise = () => new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude
                let long = position.coords.longitude
                resolve({
                    latitude: lat,
                    longitude: long
                })
            },
                function (error) {
                    reject(error.message);
                }
            )

        } else {
            reject("your browser doesn't support geolocation API")
        }
    }) 

    useEffect(() => {
        getLocationPromise().then(async (coords) => {
            const weatherRes = await weatherService.getUsingCoord([coords.latitude, coords.longitude]);
            setWeather(weatherRes);
        }).catch((error) => {
            setGeolocationError(error);
        })
    }, [])

    return (
        <div className="dashboard">
            <div className="container">
                <div className="weather-box">
                    <div className="row gx-0">
                        <div className="col-lg-7">
                            <CurrentLocation weather={weather} geolocationError={geolocationError} ></CurrentLocation>
                        </div>
                        <div className="col-lg-5">
                            <SearchLocation weather={weather} setWeather={setWeather}></SearchLocation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default;