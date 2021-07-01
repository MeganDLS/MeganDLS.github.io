
// Responsive Hamburger button for the menu items
const hamburgerButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// add the callback function () is a shortcut, arrow function is => in modern javascript (see js_arrow_function in w3 schools), the false is a kickback to the event listener.
hamburgerButton.addEventListener('click', () =>
{navigation.classList.toggle('hide')}, false
);

//POPUP
//getDay() and display: block; 5 would be for friday. Query selector all is an option.
if (d.getDay() == 5) {
    document.querySelector('.popup').style.display='block';
  }


//If the menu is shown and then the window is resized, avoid problems by
// the 760 or the 32.5em
// window.onresize = () => {
//   if (window.innerWidth > 760) navigation.classList.remove('hide')
// };
