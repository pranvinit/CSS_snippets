const target = document.getElementById("target");
const box = document.getElementById("box");
const bg = document.getElementById("box-bg");

const nodes = [target, box];

nodes.map((e) => {
  e.addEventListener("mouseover", () => {
    bg.style.clipPath = "circle(100% at 30% 30%)";
  });
});

nodes.map((e) => {
  e.addEventListener("mouseout", () => {
    bg.style.clipPath = "circle(0% at 0% 0%)";
  });
});
