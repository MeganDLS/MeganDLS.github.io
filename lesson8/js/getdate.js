// Date displayed in the footer Thursday, May 10, 2021
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();

//POPUP
//getDay() and display: block; 5 would be for friday. Query selector all is an option.
if (d.getDay() == 5) {
    document.querySelector('.popup').style.display='block';
  }