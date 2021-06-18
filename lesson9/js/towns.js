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

    //how to process an array? .map or for each or filter
    // document.getElementById("card").innerHTML = prophets;
    //prophets.forEach(prophet => {
    //let card = document.createElement('section');
    //  let h2 = document.createElement('h2');
    //h2.innerHTML = '${prophets.name}';
    //})
    //const town = towns.filter(x => x.name == "Soda Springs" || x.name == "Fish Haven" || x.name == "Preston");

    for (let i = 0; i < towns.length; i++) {

      let data = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let image = document.createElement('img');

      if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {

      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      p2.textContent = "Year Founded: " + towns[i].yearFounded;
      p3.textContent = "Population: " + towns[i].currentPopulation;
      p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "photo of " + towns[i].name);
      }
      //sourc lesson9/images/fishhaven.jpg
      //img.style.boxShadow= '0 0 30px #999'; could alter here or in css

      data.appendChild(h2);
      data.appendChild(h3);
      data.appendChild(p2);
      data.appendChild(p3);
      data.appendChild(p4);
      data.appendChild(image);

      document.querySelector('div.data').appendChild(data);
    }
  

  });
