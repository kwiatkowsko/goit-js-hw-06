const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

ingredients.forEach((elem) => {
  const listElem = document.createElement("li");
  listElem.textContent = elem;
  listElem.classList.add("item");
  list.append(listElem);
});
