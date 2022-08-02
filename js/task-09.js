
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBody = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const changeColorText = document.querySelector('.color');

changeColorButton.addEventListener('click', handlerClick)

function handlerClick() {
  changeColorBody.style.backgroundColor = getRandomHexColor()
  changeColorText.textContent = getRandomHexColor()
}

