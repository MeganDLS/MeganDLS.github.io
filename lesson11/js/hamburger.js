
// Responsive Hamburger button for the menu items
const hamburgerButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// add the callback function () is a shortcut, arrow function is => in modern javascript (see js_arrow_function in w3 schools), the false is a kickback to the event listener.
hamburgerButton.addEventListener('click', () =>
{navigation.classList.toggle('responsive')}, false
);

//POPUP Pancake Day
//getDay() and display: block; 5 would be for friday. Query selector all is an option.
if (d.getDay() == 5) {
    document.querySelector('.popup').style.display='block';
  }
