let propImages;

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
    propImages = data.Images;
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
  //   console.log(propImages.reverse());
  for (let i = 0; i < propImages.length; i++) {
    document.querySelector(".carousel-slide").insertAdjacentHTML(
      "afterbegin",
      `
      <div class="image-wrapper">
      <div class ="image-number">${i + 1}/${propImages.length}</div>
        <img src=${propImages[i].ImagePath}>
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

  let counter = 1;
  const size = carouselImages[0].clientWidth;


  //event listeners
  nextBtn.addEventListener("click", () => {
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
