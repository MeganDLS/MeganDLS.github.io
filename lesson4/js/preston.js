//select the element to manipulate
const datefield = document.querySelector("date");

//current date with that object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

//document.querySelector('#copyrightyear').textContent = d.getFullYear();
//document.querySelector('#modified').textContent = document.lastModified;

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
