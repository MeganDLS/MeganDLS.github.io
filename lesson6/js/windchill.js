
//if this is true and this is true call the function. Otherwise just print na
//DOM listener? use query selector instead of get element by id
let temp = parseFloat('#hightemp')
//document.querySelector('hightemp');
console.log(temp);
//innerHTML = wc; // instead of getElementById('highttemp');
let windspeed = document.querySelector('windspeed');


if ((hightemp <= 50) && (windspeed > 3)) {
    document.querySelector('#windchill').innerHTML = getwindchill(temp, windspeed);

}
    else {
        document.querySelector('#windchill').innerHTML = "N/A";
    }

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
function getwindchill(hightemp, windspeed) {
    let wc = 35.74 + .6215 * hightemp - 35.75 * Math.pow(windspeed, .16) + .4275 * hightemp * Math.pow(windspeed, .16);
    return wc;
    }
