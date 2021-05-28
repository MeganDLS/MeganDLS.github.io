
//if this is true and this is true call the function. Otherwise just print na
//DOM listener? use query selector instead of get element by id
//let temp = parseFloat('#hightemp')
//var details = weatherdetails.querySelectorAll("p")
//details[5].innerText = wc

//$("weatherdetails:nth-child(3)") temp 5 chill and 9 speed
let speed = document.querySelector('.windspeed');
//console.log(section.stats.weatherdetails.value.hightemp)
// let temp = document.querySelectorAll(".value")
for (var i = 0; i < value.length; i++) {
    var element = value[i];
}
//let temp = document.querySelector(parseFloat('.hightemp'))
let temp = document.querySelector(".hightemp");
let wc = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) + .4275 * temp * Math.pow(speed, .16);
temp.innerText = wc;
//innerHTML = wc; // instead of getElementById('highttemp')

console.log(temp);
console.log(speed);

if ((temp <= 50) && (speed > 3)) {
    document.querySelector('.windchill').innerHTML = getwindchill(temp, windspeed);

}
    else {
        document.querySelector('.windchill').innerHTML = "N/A";
    }

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."
//function getwindchill(hightemp, windspeed) {
  //  let wc = 35.74 + .6215 * hightemp - 35.75 * Math.pow(windspeed, .16) + .4275 * hightemp * Math.pow(windspeed, .16);
    //return wc;
    //}
