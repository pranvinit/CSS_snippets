const track = document.querySelector(".carousel__track");
// array of all individual slides
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carousel__button--left");
const nextButton = document.querySelector(".carousel__button--right");
const dotsNav = document.querySelector(".carousel__nav");
// array of all individual dots
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].clientWidth;

// helper functions
const setSlidePosition = (slide, i) => {
  slide.style.left = slideWidth * i + "px";
};

// checking carousel next edge case
const getNextSlideIndex = (currentSlide) => {
  const nextSlide = currentSlide.nextElementSibling;
  return slides.findIndex((slide) => slide === nextSlide);
};

// checking carousel prev edge case
const getPreviousSlideIndex = (currentSlide) => {
  const prevSlide = currentSlide.previousElementSibling;
  return slides.findIndex((slide) => slide === prevSlide);
};

// moves track to target slide
const moveSlide = (currentSlide, targetSlide) => {
  moveDistance = targetSlide.style.left;

  // move to the target slide
  track.style.transform = `translateX(-${moveDistance})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// updates current dot
const updateDots = (targetDot) => {
  const currentDot = dotsNav.querySelector(".current-dot");
  currentDot.classList.remove("current-dot");
  targetDot.classList.add("current-dot");
};

// forEach returns void, use it to perform operation on each item of array
slides.forEach(setSlidePosition);

// when I click Left Arrow, move slides to the left
prevButton.addEventListener("click", () => {
  // only search for node with .currentSlide within track
  const currentSlide = track.querySelector(".current-slide");
  let targetSlide;
  let targetDot;
  const prevSlideIndex = getPreviousSlideIndex(currentSlide);
  // we are at first slide
  if (prevSlideIndex !== -1) {
    targetSlide = currentSlide.previousElementSibling;
    currentDot = dotsNav.querySelector(".current-dot");
    targetDot = currentDot.previousElementSibling;
  } else {
    targetSlide = slides[slides.length - 1];
    targetDot = dots[dots.length - 1];
  }
  moveSlide(currentSlide, targetSlide);
  updateDots(targetDot);
});

// when I click Right Arrow, move slides to the right
nextButton.addEventListener("click", () => {
  // only search for node with .currentSlide within track
  const currentSlide = track.querySelector(".current-slide");
  let targetSlide;
  let targetDot;
  const nextSlideIndex = getNextSlideIndex(currentSlide);
  // we are at last slide
  if (nextSlideIndex !== -1) {
    targetSlide = currentSlide.nextElementSibling;
    currentDot = dotsNav.querySelector(".current-dot");
    targetDot = currentDot.nextElementSibling;
  } else {
    targetSlide = slides[0];
    targetDot = dots[0];
  }
  moveSlide(currentSlide, targetSlide);
  updateDots(targetDot);
});

// when I click the Nav Indicator, move to that slide
dotsNav.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  // node must be a button
  const targetDot = e.target.closest("button");
  if (!targetDot) {
    return;
  }
  const targetDotIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetDotIndex];
  // indicator dots maps to slides and sets current slide dynamically
  moveSlide(currentSlide, targetSlide);
  updateDots(targetDot);
});
