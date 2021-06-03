//****Lazy Loading****//Create a list
const imagesToLoad = document.querySelectorAll('img[data-src]');

//separate out or loop through each image ?
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
//console.display(image);

//do something with each image in the images list
const imgOptions = {
    rootmargin: '0px 0px 300px 0px',
    threshold: 0
};

if ('IntersectionObserver' in Window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach((item) =>
        {if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
        }, imgOptions);

        //load image if necessary
    imagesToLoad.forEach((img) => {
            imgObserver.observe(img);
        });
    }
else {
        //load all images if not supported
        const imgObserver = new IntersectionObserver(items => {
            items.forEach((item) =>
        imgObserver.unobserve(img));
    })}