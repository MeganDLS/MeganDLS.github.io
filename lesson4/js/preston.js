let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();

//select the element to manipulate
const datefield = document.querySelector("#updated");

//current date with that object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
  console.log(document.getElementById("navigation").classList);
  document.getElementById("navigation").classList.toggle("hide");
  //document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

  // document.getElementById("primaryNav").classList.toggle("hide");
}
