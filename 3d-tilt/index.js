const card = document.querySelector(".card");

const resetClassList = () => [
  "tl",
  "tc",
  "tr",
  "cl",
  "cc",
  "cr",
  "bl",
  "bc",
  "br",
];

card.addEventListener("mouseout", () => {
  card.classList.remove(...resetClassList());
});

card.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = e.target.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;

  const widthFr = width / 3;
  const heightFr = height / 3;

  if (x <= widthFr && y <= heightFr) {
    card.classList.remove(...resetClassList());
    card.classList.add("tl");
  } else if (x > widthFr && x <= 2 * widthFr && y <= heightFr) {
    card.classList.remove(...resetClassList());
    card.classList.add("tc");
  } else if (x > 2 * widthFr && x <= 3 * widthFr && y <= heightFr) {
    card.classList.remove(...resetClassList());
    card.classList.add("tr");
  } else if (x <= widthFr && y > heightFr && y <= 2 * heightFr) {
    card.classList.remove(...resetClassList());
    card.classList.add("cl");
  } else if (
    x > widthFr &&
    x <= 2 * widthFr &&
    y > heightFr &&
    y <= 2 * heightFr
  ) {
    card.classList.remove(...resetClassList());
    card.classList.add("cc");
  } else if (
    x > 2 * widthFr &&
    x <= 3 * widthFr &&
    y > heightFr &&
    y <= 2 * heightFr
  ) {
    card.classList.remove(...resetClassList());
    card.classList.add("cr");
  } else if (x <= widthFr && y > 2 * heightFr && y <= 3 * heightFr) {
    card.classList.remove(...resetClassList());
    card.classList.add("bl");
  } else if (
    x > widthFr &&
    x <= 2 * widthFr &&
    y > 2 * heightFr &&
    y <= 3 * heightFr
  ) {
    card.classList.remove(...resetClassList());
    card.classList.add("bc");
  } else if (
    x > 2 * widthFr &&
    x <= 3 * widthFr &&
    y > 2 * heightFr &&
    y <= 3 * heightFr
  ) {
    card.classList.remove(...resetClassList());
    card.classList.add("br");
  }
});
