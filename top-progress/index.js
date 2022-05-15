const container = document.querySelector(".container");
const content = document.querySelector(".content");

const progressBar = document.querySelector(".progress-bar");

const getScrollPercent = () => {
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = content.offsetTop;
  const elementHeight = content.offsetHeight;

  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round((distance / elementHeight) * 100);

  const progress = Math.min(100, Math.max(0, percentage));

  progressBar.style.width = !scrollTop ? 0 : `${progress}%`;
};

window.addEventListener("scroll", getScrollPercent);
