//copyright date
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();

//one way is to create a list
const images = document.querySelectorAll(".llimg")

function preloadImage(img) {
    const src = img.getAttribute(".llimg");
    if(!src) {
        return;
    }
//actual image source in DOM, set it to our created constant
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    //300px off the screen start loading in the images.
    rootmargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(img);
})