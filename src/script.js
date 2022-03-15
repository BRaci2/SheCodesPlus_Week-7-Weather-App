// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//01a738ffcc406d9b10304ab407495deb

// change city

// change temp
function dateTime(timestamp) {

  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  let months = [
    "Jan",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    
  ]


  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = daysWeek[date.getDay()];
  let dateToday = date.getDate();
  let month = months[date.getMonth()];
  let year =date.getFullYear();
  if (minutes<10) {
    minutes = `0${minutes}`}
  if (hours<10) {
    hours = `0${hours}`
  }
  
  
  return `${day}, ${month} ${dateToday}, ${year} 🌎 Last Updated: ${hours}:${minutes}`;
}

function getTemperature(response) {
  let currentTemp = document.querySelector("#temp");
  let currentCity = document.querySelector("#city");
  let country = document.querySelector("#country");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let currentDateTime = document.querySelector("#date");

  currentTemp.innerHTML = Math.round(response.data.main.temp);
  currentCity.innerHTML = `${response.data.name}`;
  country.innerHTML = `${response.data.sys.country}`;
  description.innerHTML = `${response.data.weather[0].main}`;
  humidity.innerHTML = `${response.data.main.humidity}`;
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed)}`;
  currentDateTime.innerHTML = dateTime(response.data.dt * 1000);

  console.log(response);
}

// change city

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let cityText = document.querySelector("#city");

  //
  let apiKey = `01a738ffcc406d9b10304ab407495deb`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputElement.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemperature);
}

let enterLocation = document.querySelector("#city-input-form");
enterLocation.addEventListener("submit", handleSubmit);
