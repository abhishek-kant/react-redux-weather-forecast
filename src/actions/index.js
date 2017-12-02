import axios from 'axios'
const API_KEY = 'b1b15e88fa797225412429c1c50c122a1'
const ROOT_URL = `https://query.yahooapis.com/v1/public/yql`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){

  const url = `${ROOT_URL}?q=select * from weather.forecast where woeid in (select woeid from geo.places(10) where text='${city}')&format=json`
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}