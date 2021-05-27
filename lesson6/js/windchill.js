
//if this is true and this is true call the function. Otherwise just print na
//DOM listener? use query selector instead of get element by id
let temp = document.querySelector("nth child of .").innerHTML = wc; // instead of getElementById('highttemp');
let windspeed = 25;
let feelTemp = document.getElementById('feelTemp');
feelTemp.innerHTML = getwindchill(temp, windspeed);

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
// do the parameters need to be outside the function?
//temp at <= 50 and windspeed > 3 mph
function getwindchill(temp, speed) {

let airav = 

// wind chill is in ferinheit. Windspeed is to the power of 0.16.
let windchill = 35.74 + .6215 * airav - 35.75 * Math.pow(windspeed, .16) + .4275 * airav * Math.pow(windspeed, .16);
console.log(windchill);
return Math.pow blah blah

windchill= (windchill > airav) ? temp : windchill;

console.log(windchill);
return windchill;

}
// else "N/A"