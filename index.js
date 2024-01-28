/* const request = require("request");

const API_KEY = "clé_api";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
    const url = BASE_URL + city;
    request(url, function (error, response, body) {
    if (error) {
        callback(error, null);
    } else {
        const weatherData = JSON.parse(body);
        callback(null, weatherData);
    }
    });
} */

/* const apiKey = '38f9264b8e345e5059d64b5e08c19663';
const city = 'Sousse';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`Description: ${data.weather[0].description}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Humidity: ${data.main.humidity}%`);
  })
  .catch(error => console.log('Error:', error)); */

const axios = require('axios'); 

const apiKey = '38f9264b8e345e5059d64b5e08c19663';
const city = 'Sousse';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

axios.get(url)
  .then(response => {
    const data = response.data;
    console.log(`Description: ${data.weather[0].description}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Humidity: ${data.main.humidity}%`);
  })
  .catch(error => console.log('Error:', error));