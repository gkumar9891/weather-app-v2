import axios from 'axios';
import { WEATHER_API_URL } from './constants';

export const weatherApi = axios.create({
   baseURL: WEATHER_API_URL
});

weatherApi.interceptors.response.use((response) => {
   return response
}, (error) => {
   debugger
   if(error.response)
      alert(error.response.data.message)
   else if(error.request)
      alert(error.request.data.message)
   else
      alert(error.message)
   return Promise.reject(error);
})