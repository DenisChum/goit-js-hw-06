
const inputValidElem = document.querySelector('#font-size-control');
const spanValidElem = document.querySelector('#text');

inputValidElem.addEventListener('input', inputValid)

function inputValid(even) {
spanValidElem.style.fontSize = `${even.target.value}px`
}