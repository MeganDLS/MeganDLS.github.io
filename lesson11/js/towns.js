const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// extract the JSON content we want
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  //   work with the converted response
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    //   store the results of the converted response into an array
    const towns = jsonObject['towns'];
    console.log(towns);

    for (let i = 0; i < towns.length; i++) {

      if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
      let data = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let image = document.createElement('img');
      let details = document.createElement('div');

      data.setAttribute('class', 'carditem');
      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      p2.textContent = "Year Founded: " + towns[i].yearFounded;
      p3.textContent = "Population: " + towns[i].currentPopulation;
      p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

      
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "photo of " + towns[i].name);    

      details.appendChild(h2);
      details.appendChild(h3);
      details.appendChild(p2);
      details.appendChild(p3);
      details.appendChild(p4);
      data.appendChild(image);
      data.appendChild(details);

      document.querySelector('div.towndata').appendChild(data);
      if (towns[i].name == "Fish Haven") {
        image.setAttribute('class', 'rightside');
      }
    }
  }
  });
