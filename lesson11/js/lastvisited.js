var sec = 0;
var stoptime = true;


function setStart() {
    if (stoptime == true) {
        stoptime = false;
        setStop();
     }
}

function stopTimer() {
    if (stoptime == false) {
         stoptime = true;
     }
 }

function setStop() {
     sec = sec + 1;
    
}

function getNumberOfDays() {
    let day = 60 * 60 * 24;
    document.querySelector('#daysince').innerHTML = sec/day;
    setInterval("setStop()", 1000);  
}



// -----

//  function saveCurrentDate(){
//     const date = new Date();
//     localStorage.setItem('date', date.toISOString());
//  }
// //This shuold be called when the page loads
//  function getLastVisited() {
//     let last;
//      if (localStorage.get('date') !== null )
//       last = new Date(localStorage.get('date'));
//      else last = null;

//      if (last) {
//          alert("compute the days");
//      }
//      else {
//          alert("This is the first time visiting the page");
//      }

//      saveCurrentDate();
//  }
//  getLastVisited();





//  -------
//if null save Date.
//if not null, 


// let start = Date.now();
// console.log(start);

// function getNumberOfDays(start {
//     let endDay = new Date();
// let diffrence = endDay - start;

// }

// console.log(b-a);
// localStorage.s = c;
// localStorage.e = d;

// let f = Date.parse(localStorage.b);

// From seconds to days


// function endDay(){
//     let endDay = performance.now();
//     console.log(endDay);
//     //var t = d.toLocaleTimeString();
//     return endDay;

// }

//var e = new Date();

// const date1 = createInstance();
//let start = console.time();

// const date2 = new Date();

//let endDay = Date.now();

// // One day in milliseconds
// const oneDay = 1000 * 60;  //60 * 24;

// // Calculating the time difference between two dates
// const diffInTime = date2.getTime() - date1.getTime();

// // Calculating the no. of days between two dates
// const diffInDays = Math.round(diffInTime / oneDay);

// return diffInDays; 


//}
//let time = getNumberOfDays();