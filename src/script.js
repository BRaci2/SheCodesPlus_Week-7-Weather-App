// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//01a738ffcc406d9b10304ab407495deb

// select city

function getTemperature(response) {
  console.log(response);
}
let apiKey = "01a738ffcc406d9b10304ab407495deb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getTemperature);
