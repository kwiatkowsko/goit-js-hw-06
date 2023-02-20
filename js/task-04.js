const btnSub = document.querySelector('button[data-action="decrement"]');
const btnAdd = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const incBtn = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decBtn = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnSub.addEventListener("click", decBtn);
btnAdd.addEventListener("click", incBtn);
