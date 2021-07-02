const requestURLp = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURLp)
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
                let h4 = document.createElement('h3');
                let h5 = document.createElement('h3');
                h3.textContent = towns[i].events[0];
                h4.textContent = towns[i].events[1];
                h5.textContent = towns[i].events[2];
                events.appendChild(h3);
                events.appendChild(h4);
                events.appendChild(h5);
                document.querySelector('div.upcomingp').appendChild(events);
            }
        }
    });