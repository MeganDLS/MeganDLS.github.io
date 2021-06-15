// store the url as the resource for a long string
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// extract the JSON content we want
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

//   work with the converted response
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) { 
        // add the h2 elements
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        
        card.appendChild(h2);
        
        document.querySelector('div.cards').appendChild(card);
    }


  });

//   store tehre results of the converted response into an array
  const prophets = jsonObject['prophets'];

