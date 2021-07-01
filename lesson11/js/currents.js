// Current Weather Conditions
// Preston ID: 5604473
// Soda Springs ID: 5607916
// Fish Haven ID: 5585010
const requestURL = 
'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('hightemp').textContent = t;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = s;

    let wc = (35.74 + (.6215 * t)) - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16));
    let wchill = Math.round(wc);

    if (wchill >= 50 && s > 3) {
      document.querySelector('#windchill').innerHTML = wchill;
    } else {
      document.querySelector('#windchill').innerHTML = "N/A";
    }
});
