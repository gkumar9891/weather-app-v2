import { weatherApi } from "../axios-config";
import { APP_ID } from "../constants";

class Weather {
    getUsingCoord([lat, long]) {
        return weatherApi('/weather', {
            params: {
                lat: lat,
                lon: long,
                appid: APP_ID,
                units: 'metric'
            }
        }).then(res => res.data)
    }
}

export default new Weather();