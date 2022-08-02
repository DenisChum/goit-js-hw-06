

const categoryList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(el => 
console.log(
`Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`
)); 


