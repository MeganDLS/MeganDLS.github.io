// API edd40baf43f2b3f80219cb8af5bd05d9

const requestURL = 
'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let t = jsObject.main.temp_max;
    let s = jsObject.wind.speed;

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('hightemp').textContent = t;
    document.getElementById('currenttemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = s;

    let wc = Math.round((35.74 + (.6215 * t)) - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16)));

    if (t <= 50 && s > 3) {
      document.querySelector('#windchill').innerHTML = wc;
    } else {
      document.querySelector('#windchill').innerHTML = "N/A";
    }


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });



// // extract the JSON content we want
//fetch(requestURL)
//   .then(function (response) {
//   return response.json();
//  })

//   //   work with the converted response
//   .then(function (jsonObject) {
//     console.table(jsonObject); // temporary checking for valid response and data parsing

//     //   store the results of the converted response into an array
//     const weather = jsonObject['main'];
//     console.log(main);

//     for (let i = 0; i < main.length; i++) {

//       if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
//       let data = document.createElement('section');
//       let h2 = document.createElement('h2');
//       let h3 = document.createElement('h3');
//       let p2 = document.createElement('p');
//       let p3 = document.createElement('p');
//       let p4 = document.createElement('p');
//       let image = document.createElement('img');

//       data.setAttribute('class', 'carditem');
//       h2.textContent = towns[i].name;
//       h3.textContent = towns[i].motto;
//       p2.textContent = "Year Founded: " + towns[i].yearFounded;
//       p3.textContent = "Population: " + towns[i].currentPopulation;
//       p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

//       image.setAttribute('src', "images/" + towns[i].photo);
//       image.setAttribute('alt', "photo of " + towns[i].name);    

//       data.appendChild(h2);
//       data.appendChild(h3);
//       data.appendChild(p2);
//       data.appendChild(p3);
//       data.appendChild(p4);
//       data.appendChild(image);

//       document.querySelector('div.data').appendChild(data);
//       if (towns[i].name == "Fish Haven") {
//         image.setAttribute('class', 'leftside');
//       }

//     }
//   }
//   });