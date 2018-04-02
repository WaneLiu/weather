import axios from 'axios';

const API_KEY = '62fe1aa5aa2e820665c13341c14bfd04';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);//request is  typeof promise


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
