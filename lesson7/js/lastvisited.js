
//When user clicks the gallery button from lesson-6.html
function createInstance() {
    var startDay = new Date();
    localStorage.setItem = startDay;
    return startDay;
}

//console.log(startDay);
//console.log(createInstance())
getNumberOfDays(createInstance());

//Get the difference of dates to a number
function getNumberOfDays(startDay) {
    const date1 = createInstance();
    const date2 = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
    
}

//var button = document.getElementById("createInstance")
//count = 0;
//button.onclick = getNumberOfDays() 
//{ count += 1;
 //   button.innerHTML = "Click me:" + count;
//};

document.querySelector('#daysince').innerHTML = getNumberOfDays(createInstance());
    