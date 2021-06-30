// Date displayed in the footer Thursday, May 10, 2021
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();

//select the element to manipulate
const datefield = document.querySelector("#updated");

//current date with that object
//const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(d);

datefield.innerHTML = `<em>${fulldate}</em>`;

//POPUP
//getDay() and display: block; 5 would be for friday. Query selector all is an option.
if (d.getDay() == 5) {
  document.querySelector('.popup').style.display='block';
}