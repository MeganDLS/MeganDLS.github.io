//copyright date
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();


//****Lazy Loading****
//Create a list
const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//do something with each image in the images list
const imgOptions = {
    rootmargin: '0px 0px 300px 0px',
    threshold: 0
};

if ('IntersectionObserver' in Window) 
{const imgObserver = new IntersectionObserver(images => 
    {images.forEach(image =>
        {if (image.isIntersecting) 
            {loadImages(image.target);
            imgObserver.unobserve(image.target);
        }
    });
        }, imgOptions);

        //load image if necessary
    images.forEach((image) => 
        {
            imgObserver.observe(image);
        });
    }
else {
        //load all images if not supported
        imgObserver.unobserve(image);
    }