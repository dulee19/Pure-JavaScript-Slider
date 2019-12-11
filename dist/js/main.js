// Navigation
let open = document.querySelector(".open"),
  close = document.querySelector(".close");

open.addEventListener("click", e => {
  document.querySelector("#side-menu").style.width = "240px";
  e.preventDefault();
});

close.addEventListener("click", e => {
  document.querySelector("#side-menu").style.width = "0";
});

// Slider
const slides = document.querySelectorAll(".slide"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  auto = true,
  intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button Events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Automatically
if (auto) {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}
