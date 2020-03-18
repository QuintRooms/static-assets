let props = [718107, 507388, 2332133, 2028020, 1258650, 313962, 282860, 224842, 445045, 371294, 388067, 341911, 409543, 405529, 300314, 342899, 312202, 1466441, 515326, 18845, 361301, 41357, 615332, 20837, 191708, 1231557, 359000, 191722, 712504, 496155, 29433, 275750];

async function getPropImages() {
    let propId = props[Math.floor(Math.random() * props.length)];

    try {
        let data = await fetch(
            `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`, {
                method: "GET"
            }
        ).then(response => response.json());

        //changes image url
        // since the variables that were created here aren't used anywhere else, we can just manipulate and return the data directly. We can still access the data by setting a variable to the function call like below.
        return data.Images.map(e => e.ImagePath.replace(/_300/, "_804480"));
    } catch (error) {
        console.log(error);
    }
}

//inject html and images
async function createPropImageSlideshow() {
    let propImages = await getPropImages();

    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="carousel-container">
            <div class="carousel-slide">
            </div>
            <a id="previousBtn">&#10094;</a>
            <a id="nextBtn">&#10095;</a>
        </div>
    `);

    for (let i = 0; i < propImages.length; i++) {
        document.querySelector('.carousel-slide').insertAdjacentHTML(
            'beforeend',
            `
              <div class="image-wrapper">
              <div class ="image-number">${i + 1}/${propImages.length}</div>
                <img src=${propImages[i]}>
              </div>
            `
        );
    }
}

async function createCarousel() {
    await createPropImageSlideshow();


    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    const previousBtn = document.querySelector('#previousBtn');
    const nextBtn = document.querySelector('#nextBtn');

    // since these are only used in this function, we can just set them here
    let counter = 0;
    let size = carouselImages[0].clientWidth;
    
    //size is the value used to move the image by
    //with each image being a different size, I think the below is an issue

    // the css is explicit about the size so  if it's off it's probably something else. However, to make sure we get the size that's on the screen, we can reset the size variable when the user clicks so we're only moving it by the current images exact width.
  
    // size = carouselImages[0].clientWidth;

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;

        counter++;
        size = carouselImages[counter].clientWidth;

        console.log(size);

        //calculation for how much to move the current image by
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    previousBtn.addEventListener('click', () => {
        if (counter <= 0) return;

        counter--;
        size = carouselImages[counter].clientWidth;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
}

createCarousel();