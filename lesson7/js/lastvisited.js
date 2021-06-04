
//Save as an instance the last time user clicked on the gallery. 
//Must use localStorage eventually.
//When user clicks the gallery button
function createInstance() {
    var startDay = new Date();
    localStorage.test1 = startDay;
    return startDay;
    console.log(startDay);
  
}

getNumberOfDays(createInstance());

//***user clicks a button that says "Last Visited"*/
//function lastDay() {
   /// var endDay = new Date();
   // sessionStorage.text1 = endDay;
   // return endDay;
   // console.log(endDay);
   
//}

//Get today's date (as a string?) or set it to 1 maybe? or do I even need this?
//to verify it's not today... no.
//const isToday = (someDate) => {
  //  const endDay = new Date()
   // return someDate.getDate() == endDay.getDate() &&
    //  someDate.getMonth() == endDay.getMonth() &&
     // someDate.getFullYear() == endDay.getFullYear()
    //}
//console.log(endDay);

//Check if the instance is endDay (since the last endDay was in the function it's ok, right?)
//const endDay = isToday(endDate); //where did this come from?
//console.log(endDate);
//console.log(endDay);

//var sd = ;
//var ed = ;


//Get the difference of dates to a number
function getNumberOfDays(startDay) {
    const date1 = new Date(startDay);
    const date2 = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
    document.getElementById('#daysince').innerHTML = diffInDays;
    console.log(diffInDays);
}
//console.log(getNumberOfDays(sd, ed));
console.log(getNumberOfDays("2/1/2021", "3/1/2021"));



//Message to display
//const dp = myDate
//if (temp <= 50 && speed > 3) {
   // var str1 = "Welcome! We haven't seen you since ";
    //const dp = 1;
  //  var str2 = " days ago.";
  //  var str3 = "yesterday";
  //  var fullstr = str1.concat(dp, str2);
  //  var yesterday = str1.concat(str3);
 //   document.querySelector('.dayspassed').innerHTML = fullstr;
//} else {
 //   document.querySelector('.dayspassed').innerHTML = yesterday;
//}
//console.log();

//***OR Do automatically*/
