const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allIng = document.querySelector("#ingredients");
console.log(allIng);

const arrayList = []
ingredients.forEach(ing => {
let liItem = document.createElement("li");
liItem.classList.add("item");
liItem.textContent = ing;
console.log(liItem);
  arrayList.push(liItem)

})
allIng.append(...arrayList);
