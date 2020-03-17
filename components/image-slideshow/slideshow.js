let propImages;
let size;
let counter = 0;


async function getPropImages() {
//   let propId = "16664";
  let propId = "45491";

  try {
    let data = await fetch(
      `https://api.travsrv.com/api/content/findpropertyinfo?&username=h4h&password=hDzYz9HHwcJDDthPK&propertyid=${propId}`,
      {
        method: "GET"
      }
    ).then(response => response.json());
    let propInfo = data.Images;
     propImages = propInfo.map(e => e.ImagePath.replace(/_300/,'_804480'));
      console.log(propImages);
    return propImages;
  } catch (error) {
    console.log(error);
  }
}

//inject html and images
async function createPropImageSlideshow() {
  await getPropImages();
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="carousel-container">
        <div class="carousel-slide">
        </div>
        <a id="previousBtn">&#10094;</a>
        <a id="nextBtn">&#10095;</a>
    </div>
  `
  );
  for (let i = 0; i < propImages.length; i++) {
    document.querySelector(".carousel-slide").insertAdjacentHTML(
      "beforeend",
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

  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const previousBtn = document.querySelector("#previousBtn");
  const nextBtn = document.querySelector("#nextBtn");

//   const size = carouselImages[0].clientWidth;
//   const size = image.offsetWidth;

  //event listeners
  nextBtn.addEventListener("click", () => {
    size = carouselImages[0].clientWidth;
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  });

  previousBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  });
}

createCarousel();


//_804480