// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//01a738ffcc406d9b10304ab407495deb

// change city

// change temp

function getTemperature(response) {
  let currentTemp = document.querySelector("#temp");
  let currentCity = document.querySelector("#city");
  let country = document.querySelector("#country");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");

  currentTemp.innerHTML = Math.round(response.data.main.temp);
  currentCity.innerHTML = `${response.data.name}`;
  country.innerHTML = `${response.data.sys.country}`
  description.innerHTML = `${response.data.weather[0].main}`;
  humidity.innerHTML = `${response.data.main.humidity}`;
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed)}`;

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
