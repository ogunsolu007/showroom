const Slide = document.querySelector(".head-slide");
const contentSlide = document.querySelectorAll(".content");

//button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//couter

let counter = 1;

const size = contentSlide[0].clientWidth;
console.log(size);

Slide.style.transform = `translateX(${-size * counter}px)`;

//btn listener

nextBtn.addEventListener("click", () => {
  if (counter >= contentSlide.length - 1) return;
  Slide.style.transition = "transform 2s ease-in-out";
  counter++;
  Slide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  Slide.style.transition = "transform 2s ease-in-out";
  counter--;
  Slide.style.transform = `translateX(${-size * counter}px)`;
});

Slide.addEventListener("transitionend", () => {
  if (contentSlide[counter].id === "lastClone") {
    Slide.style.transition = "none";
    counter = contentSlide.length - 2;
    Slide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (contentSlide[counter].id === "firstClone") {
    Slide.style.transition = "none";
    counter = contentSlide.length - counter;
    Slide.style.transform = `translateX(${-size * counter}px)`;
  }
});

const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
var open = true;
ham.addEventListener("click", () => {
  if (open) {
    nav.classList.toggle("active");
    ham.style.display = "none";
  }
});
