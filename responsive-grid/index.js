const imageGrid = document.getElementById("grid");
const loadButton = document.getElementById("loadButton");

window.addEventListener("DOMContentLoaded", (event) => {
  insertImages(12);
});

const insertImages = (count) => {
  while (count) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");

    const gridImage = document.createElement("img");
    gridImage.classList.add("gridImg");
    gridImage.src = "./assets/noAvatar.png";
    --count;
    gridItem.append(gridImage);
    imageGrid.append(gridItem);
  }
};

const handleClick = () => {
  insertImages(6);
};

loadButton.addEventListener("click", handleClick);
