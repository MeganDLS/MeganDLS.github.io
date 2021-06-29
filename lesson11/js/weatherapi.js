// Current Weather Conditions
// Preston ID: 5604473
const requestcurrentURL = 
'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestcurrentURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('hightemp').textContent = t;
    document.getElementById('currenttemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = s;

    let wc = (35.74 + (.6215 * t)) - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16));
    let windchill = Math.round(wc);

    if (wcc >= 50 && s > 3) {
      document.querySelector('#windchill').innerHTML = windchill;
    } else {
      document.querySelector('#windchill').innerHTML = "N/A";
    }
});

// Five Day Forecast from 16 days API
const requestAPI =
'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let day = 1;
    const dayofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const fivedays = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fivedays);
   
    fivedays.forEach(x => {
      let d = new Date(x.dt_txt);

    //   Retrieving Day of the week
      document.getElementById('day' + day).textContent = dayofweek[d.getDay()];
    //   Retrieving Current Temperature
      document.getElementById('data' + day).textContent = x.main.temp;
    //   Image for conditions
      document.getElementById('day' + day + 'image').setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
      day++;
    })
  });
