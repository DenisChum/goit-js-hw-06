const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIng = document.querySelector("#ingredients");
const newList = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
allIng.insertAdjacentHTML("afterbegin", newList);
console.log(allIng);