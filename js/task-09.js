function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const span = document.querySelector("span");

const changeColor = () => {
  const colorValue = getRandomHexColor();
  span.innerHTML = colorValue;
  body.style.backgroundColor = colorValue;
};

button.addEventListener("click", changeColor);
