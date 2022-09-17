const slider_img = document.querySelector(".slider__image--container");
const slider_text = document.querySelector(".slider__text--container");
const imgSlides = document.querySelectorAll(".slide ");
const textSlides = document.querySelectorAll(" .text-content");
const prevBtn = document.querySelector(".prev_arrow");
const nextBtn = document.querySelector(".next_arrow");

// Slider Functionalities

let curSlide = 0;
let maxSlide = imgSlides.length && textSlides.length;

const goToSlide = function (slide) {
  imgSlides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}% `;
  });
  textSlides.forEach((s, i) => {
    s.style.transform = `translateX(${-120 * (i - slide)}% `;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
