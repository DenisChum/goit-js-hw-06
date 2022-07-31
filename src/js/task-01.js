

const categoryList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryList.length}`);

const elemOfCategory = document.querySelectorAll("#categories > li.item");
elemOfCategory.forEach(el => 
console.log(
`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`
)); 