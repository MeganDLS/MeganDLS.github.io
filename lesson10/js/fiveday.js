// let firsturl = 'https://api.openweathermap.org/data/2.5/weather?=id';
// let preston = '5604473'; //'preston, ID';
// let sodasprings = 'soda springs, ID';
// let fishhaven = 'fish haven, ID';
// // 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
// let mykey = '&appid=edd40baf43f2b3f80219cb8af5bd05d9';
const requestAPI = 
'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let day = 1;
    const dayofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    const fivedays = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fivedays);
    // for (let i=0; i< jsObject.list.length; i++) {
    //   if(jsObject.list[i].dt_txt.includes("18:00:00")} {
    //     forecast.push(jsObject.list[i])
    //   }
    fivedays.forEach(x => {
      let d = new Date(x.dt_txt);
      console.log(d);
      //template literal to avoid concatination
      document.getElementById('day' + day).textContent = dayofweek[d.getDay()];
    
     // document.getElementById('forecast'+ day).textContent = x.main.temp;
     //document.getElementById('image' + day).setAttribule('src', day1image);

     day++;


    //  const day1image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    //  const desc = jsObject.weather[0].description; 
    //  document.getElementById('day1image' + day).textContent = day1image; 
    //  document.getElementById('icon').setAttribute('src', day1image); 
    //  document.getElementById('icon').setAttribute('alt', desc);
    
    })

    

    

  });