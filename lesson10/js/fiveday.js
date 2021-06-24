

      // let firsturl = 'https://api.openweathermap.org/data/2.5/weather?=id';
      // let preston = '5604473'; //'preston, ID';
      // let sodasprings = 'soda springs, ID';
      // let fishhaven = 'fish haven, ID';
      // // 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
      // let mykey = '&appid=edd40baf43f2b3f80219cb8af5bd05d9';
      const requestAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';
      
      //'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

      fetch(requestAPI)
        .then((response) => response.json())
        .then((jsObject) => {
          console.log(jsObject);

          let day= 0;
          const dayofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

          const fivedays = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
console.log(fivedays);
          // for (let i=0; i< jsObject.list.length; i++) {
          //   if(jsObject.list[i].dt_txt.includes("18:00:00")} {
          //     forecast.push(jsObject.list[i])
          //   }
fivedays.forEach(i => {
  let d = new Date(i.dt_txt);
console.log(d);
  document.getElementById('day1').textContent = dayofweek[d.getDay()];
  document.getElementById('day2${day+1}').textContent = dayofweek[d.getDay()];
  document.getElementById('day3${day+1}').textContent = dayofweek[d.getDay()];
  document.getElementById('day4${day+1}').textContent = dayofweek[d.getDay()];
  document.getElementById('day5${day+1}').textContent = dayofweek[d.getDay()];
})
          

      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
      const desc = jsObject.weather[0].description; // note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);

        });