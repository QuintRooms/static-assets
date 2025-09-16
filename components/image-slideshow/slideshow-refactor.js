const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
let counter = 0;
let prop_images;
let carousel_images;

/**
 *@descriptionmakes the initial fetch to the api to grab all the images for the property then changes the image url to '_804480' for improved quality
 */
async function getPropImages() {
    try {
        const data = await fetch(`https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h_2025&password=0Ba7R3wI{f7_|I9H&propertyid=${prop_id}`, {
            method: 'GET',
        }).then((response) => response.json());
        return data.Images.map((e) => e.ImagePath.replace(/_300/, '_804480'));
    } catch (error) {
        return error;
    }
}

/**
 *@description Every time a new image is put into the images array, it checks that its size is over 400 and removes it from the array if it isn't.
 @param Number image number in array
*/
function removeSmallImages(i) {
    const current_image = document.querySelector(`#image-${i}`);
    current_image.onload = () => {
        if (current_image.naturalWidth < 400) {
            prop_images.splice(i, 1);
            current_image.parentNode.remove();
        }
    };
}

/**
 *@description sets the iterator for the populateImages function, this will allow the next 5 images to load when you are within 2 images of the current end of the array.
 */
function set_image_loop_iterator() {
    const value = counter === 0 ? counter : counter + 2;
    return value;
}

/**
 *@description whenever the current image is within two of the end of the current array lenght, populateImages will load the next 5 images and insert them into the DOM.
 */
function populateImages() {
    carousel_images = document.querySelectorAll('.carousel-slide img');
    for (let i = set_image_loop_iterator; i < counter + 5; i += 1) {
        if (i === prop_images.length) return;

        document.querySelector('.carousel-slide').insertAdjacentHTML(
            'beforeend',
            `
                <div class="image-wrapper">
                    <img id="image-${i}" src=${prop_images[i]}>
                </div>
            `
        );
        removeSmallImages(i);
    }
}

/**
 *@description creates the slideshow container, next and prev buttons and calls other functions to get the images and insert them.
 */
async function createPropImageSlideshow() {
    prop_images = await getPropImages();
    document.body.insertAdjacentHTML(
        'afterend',
        `
            <div class="carousel-container">
                <div class="carousel-slide">
                </div>
                <a id="previous_btn">&#10094;</a>
                <a id="next_btn">&#10095;</a>
            </div>
        `
    );
    populateImages();
}

/**
 *@description sets up the event listeners for the next and prev buttons as well as the action for the buttons to move each image by the size of that image either to the left or right.
 */
async function createCarousel() {
    await createPropImageSlideshow();

    const carousel_slide = document.querySelector('.carousel-slide');
    const previous_btn = document.querySelector('#previous_btn');
    const next_btn = document.querySelector('#next_btn');

    next_btn.addEventListener('click', () => {
        carousel_images = document.querySelectorAll('.carousel-slide img');
        if (counter === carousel_images.length - 1) return;
        counter += 1;
        const size = carousel_images[counter].clientWidth;
        carousel_slide.style.transform = `translateX(${-size * counter}px)`;
        if (counter === carousel_images.length - 1) {
            populateImages();
        }
    });

    previous_btn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter -= 1;
        const size = carousel_images[counter].clientWidth;
        carousel_slide.style.transform = `translateX(${-size * counter}px)`;
    });
}

createCarousel();
