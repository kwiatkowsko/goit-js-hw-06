const category = document.querySelectorAll(".item");

console.log("Number of categories: " + category.length);

category.forEach((elem) => {
  console.log("Category: " + elem.querySelector("h2").innerHTML);
  console.log("Elements: " + elem.querySelectorAll("li").length);
});
