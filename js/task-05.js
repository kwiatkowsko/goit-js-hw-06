const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inpFunc = (event) => {
  if (!event.currentTarget.value) {
    return (output.textContent = "Anonymous");
  }
  return (output.textContent = event.currentTarget.value);
};

input.addEventListener("input", inpFunc);
