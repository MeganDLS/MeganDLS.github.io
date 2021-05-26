
//DOM listener?
let temp = 3;
let windspeed = 25;
let feelTemp = document.getElementById('feelTemp');
feelTemp.innerHTML = getwindchill(temp, windspeed);

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
// do the parameters need to be outside the function?
//temp at <= 50 and windspeed > 3 mph
function getwindchill() {

let airav = 

// wind chill is in ferinheit. Windspeed is to the power of 0.16.
let windchill = 35.74 + .6215 * airav - 35.75 * Math.pow(windspeed, .16) + .4275 * airav * Math.pow(windspeed, .16);
console.log(windchill);

windchill= (windchill > airav) ? temp : windchill;

console.log(windchill);
return windchill;

}
// else "N/A"