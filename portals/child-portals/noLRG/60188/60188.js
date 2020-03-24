import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateRoomDescription('.RoomDescription', 'Hotels for Hope Exclusive Rates');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                noLRGPortal.updateAttribute('.logo img', 'https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/logo.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://www.hotelsforhope.com/', 'href');
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/60188.css">');


noLRGPortal.updateAttribute('.RootBody', 'background-image: url(https://dev-static.hotelsforhope.com/portals/child-portals/noLRG/60188/images/banner.png)', 'style');


/* - - - - -  Image slideshow gallery - - - - - */

function replaceImageSlideshow(){
    document.querySelector('.ArnPhotoContainer').style.display = 'none';

    let propId = document.querySelector('meta[name="aPropertyId"]').content;
    let counter = 0;
    let propImages;
    let carouselImages;


    async function getPropImages() {
        try {
            let data = await fetch(
                `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`, {
                    method: "GET"
                }
            ).then(response => response.json());
            return data.Images.map(e => e.ImagePath.replace(/_300/, "_804480"));
        } catch (error) {
            console.log(error);
        }
    }

    async function createPropImageSlideshow() {
        propImages = await getPropImages();
        document.querySelector('.PropertyLinks').insertAdjacentHTML(
            'afterend',
            `
            <div class="carousel-container">
                <div class="carousel-slide">
                </div>
                <a id="previousBtn">&#10094;</a>
                <a id="nextBtn">&#10095;</a>
            </div>
        `);
        populateImages();
    }

    function populateImages(){
        carouselImages = document.querySelectorAll('.carousel-slide img');
        for (let i = counter === 0 ? counter : counter + 2 ; i < counter + 5; i++) {
            if(i === propImages.length) return;
                    document.querySelector('.carousel-slide').insertAdjacentHTML(
                        'beforeend',
                        `
                        <div class="image-wrapper">
                        <div class ="image-number">${i+1}/${propImages.length}</div>
                            <img src=${propImages[i]}>
                        </div>
                        `
                    );
                }
        };

    async function createCarousel() {
        await createPropImageSlideshow();

        let carouselSlide = document.querySelector('.carousel-slide');
        const previousBtn = document.querySelector('#previousBtn');
        const nextBtn = document.querySelector('#nextBtn');
    
        nextBtn.addEventListener('click', () => {
            carouselImages = document.querySelectorAll('.carousel-slide img');
            if (counter === carouselImages.length -1) return;
            counter++;
            let size = carouselImages[counter].clientWidth;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            if(counter === carouselImages.length -2){
                populateImages();
            };
        });

        previousBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            counter--;
            let size = carouselImages[counter].clientWidth;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });
    }

    createCarousel();
};

if(document.querySelector('.SinglePropDetail')){
    replaceImageSlideshow();
}