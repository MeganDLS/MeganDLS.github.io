const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {
                let events = document.createElement('div');
                let h3 = document.createElement('h3');
                events.setAttribute('class', 'currentevents');
                h3.textContent = towns.events[0, 1, 2];
                events.appendChild(h3);
                document.querySelector('div.upcomingp').appendChild(events);

                document.querySelector('div.towndata').appendChild(data);
            }
        }
    });