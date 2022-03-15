// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//01a738ffcc406d9b10304ab407495deb

// change city

// change temp

function getTemperature(response) {
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}
function getCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = `${currentCity.value}}`;

  let apiKey = `01a738ffcc406d9b10304ab407495deb`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemperature);
}

// change city

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let cityText = document.querySelector("#city");
  cityText.innerHTML = `${cityInputElement.value}`;
}

let enterLocation = document.querySelector("#city-input-form");
enterLocation.addEventListener("submit", handleSubmit);
