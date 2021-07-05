
// let requestAPI;
// const p = document.querySelector('#preston');
// const ss = document.querySelector('#sodasprings');
// const fh = document.querySelector('#fishhaven');
// if (h3 == Preston) {
//   let requestAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';
// }

const requestAPI ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

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

      document.getElementById('day' + day).textContent = dayofweek[d.getDay()];
      document.getElementById('data' + day).textContent = x.main.temp + ' °F';
      document.getElementById('day' + day + 'image').setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
      day++;
    })
  });