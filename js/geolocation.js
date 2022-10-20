'use strict'

let tempHTML = document.querySelector('.temperature');
let cityHTML = document.querySelector('.location-city');
let weatherIcon = document.querySelector('.weather-icon');

const apikey = '8aef9959460268bbfa8eda80c17f2757';
let city = '';
let temp = '';
let weather = '';
let icon = '';

navigator.geolocation.getCurrentPosition(success, failed);

async function success(pos){
  console.log(pos);
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
  console.log(lat, long);

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;

  let data = await fetch(url).then((response) => response.json());
  city = data.name;
  temp = Math.round(data.main.temp);
  icon = data.weather.icon;
  console.log(city, temp);

  switch(icon) {
    case '11d':
      weatherIcon.src = 'img/thunderstorm.png';
      break;
    case '10d':
      weatherIcon.src = 'img/rain.png';
      break;
    case '13d':
      weatherIcon.src = 'img/snow.png';
      break;
    case '01d':
      weatherIcon.src = 'img/sunny.png';
      break;
    case '02d':
      weatherIcon.src = 'img/partly-cloudy.png';
      break;
    case '03d':
      weatherIcon.src = 'img/cloudy.png';
      break;
    default:
      weatherIcon.src = 'img/sunny.png';
  } 

  tempHTML.innerHTML = `${temp}°`;
  cityHTML.innerHTML = city;
}

function failed() {
  console.log('data fetch failed!');
}