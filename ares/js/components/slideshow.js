export default class Slideshow {
    addImageSlideshow() {
        document.querySelector('#thePropertyImages').style.display = 'none';

        const prop_id = document.querySelector('meta[name="aPropertyId"]').content;
        let counter = 0;
        let prop_images;
        let carousel_images;

        async function getPropImages() {
            try {
                const data = await fetch(`https://api.hotelsforhope.com/arn/properties/${prop_id}`, {
                    method: 'GET',
                }).then((response) => response.json());
                return data.Images.map((e) => e.ImagePath.replace(/_300/, '_804480'));
            } catch (error) {
                console.log(error);
            }
        }

        function populateImages() {
            carousel_images = document.querySelectorAll('.carousel-slide img');
            for (let i = counter === 0 ? counter : counter + 2; i < counter + 5; i += 1) {
                if (i === prop_images.length) return;
                document.querySelector('.carousel-slide').insertAdjacentHTML(
                    'beforeend',
                    `<div class="image-wrapper">
                        <div class ="image-number">${i + 1}/${prop_images.length}</div>
                        <img src=${prop_images[i]}>
                    </div>`
                );
            }
        }

        async function createPropImageSlideshow() {
            prop_images = await getPropImages();
            document.querySelector('.ArnPropName').insertAdjacentHTML(
                'afterend',
                `<div class="carousel-container">
                    <div class="carousel-slide">
                    </div>
                    <a id="previousBtn">&#10094;</a>
                    <a id="nextBtn">&#10095;</a>
                </div>`
            );
            populateImages();
        }

        function hideArrows(next, prev) {
            if (counter > 1 && counter < prop_images.length - 2) return;

            next.style.display = 'block';
            prev.style.display = 'block';

            if (counter === 0) prev.style.display = 'none';

            if (counter + 1 === prop_images.length) next.style.display = 'none';
        }

        async function createCarousel() {
            await createPropImageSlideshow();

            const carousel_slide = document.querySelector('.carousel-slide');
            const previous_btn = document.querySelector('#previousBtn');
            const next_btn = document.querySelector('#nextBtn');
            hideArrows(next_btn, previous_btn);

            next_btn.addEventListener('click', () => {
                carousel_images = document.querySelectorAll('.carousel-slide img');
                if (counter === carousel_images.length - 1) return;
                counter += 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
                if (counter === carousel_images.length - 2) {
                    populateImages();
                }
            });

            previous_btn.addEventListener('click', () => {
                if (counter <= 0) return;
                counter -= 1;
                hideArrows(next_btn, previous_btn);
                const size = carousel_images[counter].clientWidth;
                carousel_slide.style.transform = `translateX(-${size * counter}px)`;
            });
        }

        createCarousel();
    }
}
