let propImages;

async function getPropImages() {
  let propId = "16664";

  try {
    let data = await fetch(
      `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`,
      {
        method: "GET"
      }
    ).then(response => response.json());
    propImages = data.Images;
    return propImages;
  } catch (error) {
    console.log(error);
  }
}

async function createPropImageSlideshow() {
  await getPropImages();
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="carousel-container">
        <div class="carousel-slide">
        </div>
    </div>
    <button id="previousBtn">Previous</button>
    <button id="nextBtn">Next</button>

  `
  );
//   console.log(propImages.reverse());
  for (let i = 0; i < propImages.length; i++) {
    document
      .querySelector(".carousel-slide")
      .insertAdjacentHTML("afterbegin", `
      <div class="image-wrapper">
      <img src=${propImages[i].ImagePath}>
      </div>`);
  }
}

async function createCarousel() {
  await createPropImageSlideshow();

  //cached elements
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const previousBtn = document.querySelector("#previousBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 1;
  const size = carouselImages[0].clientWidth;

  carouselSlide.style.transform = "translateX(" + ( - size * counter) + "px)";

  nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + ( - size * counter) + "px)";
  });

  previousBtn.addEventListener('click', () => {
        if(counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4 ease-in-out';
        console.log(counter);
        counter--;
        console.log(counter);    
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {
        if(carouselImages[counter].id === 'lastclone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
         if(carouselImages[counter].id === 'lastclone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })
}

createCarousel();
