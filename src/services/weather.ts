import request from './api';


const API_KEY = 'a6d43b0f5d104c0def5bd4d25bd42116'

async function fetchAllCountries() {
    try {
      return await request({
        url: 'https://restcountries.com/v3.1/all',
        options: {
          method: 'GET',
        },
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async function getCountryDetails(name:string) {
    try {
      return await request({
        url: `https://restcountries.com/v3.1/name/${name}`,
        options: {
          method: 'GET',
        },
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async function getCountryWeather(lat:number,lon:number) {
    try {
      return await request({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        options: {
          method: 'GET',
        },
      });
    } catch (err) {
      return Promise.reject(err);
    }
  } 
 

export { fetchAllCountries, getCountryDetails, getCountryWeather} 