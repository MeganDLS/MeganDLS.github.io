// store the url as the resource for a long string
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// extract the JSON content we want
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  //   work with the converted response
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    //   store the results of the converted response into an array
    const prophets = jsonObject['prophets'];

    //how to process an array?
    // document.getElementById("card").innerHTML = prophets;

//prophets.forEach(prophet => {
  let card = document.createElement('section');
      let h2 = document.createElement('h2');


      h2.innerHTML = '${prophets.name}';

})

    for (let i = 0; i < prophets.length; i++) {
      // add the h2 elements
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let image = document.createElement('img');

    
      // date of birth, date of death, place of birth, image

      h2.textContent = '${prophets[i].name} ${prophets[i].lastname}';
      //.innerHTML would be to alter 
      h3.textContent = prophets[i].birthdate;
      p.textContent = prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);
      // img.style.boxShadow= '0 0 30px #999'; could alter here or in css

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
 

  });
