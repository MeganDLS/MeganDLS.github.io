//let temp = parseFloat('#hightemp')
//details[5].innerText = wc
//$("weatherdetails:nth-child(3)") temp 5 chill and 9 speed

//let temp2 = parseInt(temp);
//console.log(temp2)
//console.log(typeof temp2)

//console.log(section.stats.weatherdetails.value.hightemp)
// let temp = document.querySelectorAll(".value")
//for (var i = 0; i < value.length; i++) {
//  var element = value[i];
//}
//let temp = document.querySelector(parseFloat('.hightemp'))

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."


//function getwindchill(hightemp, windspeed) {
//let wc = 35.74 + .6215 * hightemp - 35.75 * Math.pow(windspeed, .16) + .4275 * hightemp * Math.pow(windspeed, .16);
//return wc;
//}

function getwindchill(temp, speed) {  

    let wc = (35.74 + (.6215 * temp)) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));
    let wcc = Math.round(wc);
    return wcc;
}

let s = document.querySelector('.windspeed').textContent;
let speed = parseFloat(s);

let t = document.querySelector('.hightemp').textContent;
let temp = parseFloat(t);

if (temp <= 50 && speed > 3) {
    document.querySelector('.windchill').innerHTML = getwindchill(temp, speed);
} else {
    document.querySelector('.windchill').innerHTML = "N/A";
}