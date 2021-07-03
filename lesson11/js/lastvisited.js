//#daysince in gallery.html

let last;

if (localStorage.getItem('date') !== null) {
    last = new Date(localStorage.getItem('date'));
} else {
    last = new Date();
    localStorage.setItem('date', String(last));
}
document.getElementById('daysince').innerHTML = String(last);

let now = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const milliseconds = now - last;

document.getElementById('daysince').innerHTML = Math.trunc(milliseconds / oneDay);
localStorage.setItem('date', String(now));