const target = document.getElementById("target");
const bg = document.getElementById("box-bg");

target.addEventListener('mouseover', () => {
    bg.style.clipPath = 'circle(100% at 30% 30%)';
})
target.addEventListener('mouseout', () => {
    bg.style.clipPath = 'circle(0% at 0% 0%)';
})