// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputValidElem = document.querySelector('#font-size-control');
const spanValidElem = document.querySelector('#text');

inputValidElem.addEventListener('change', inputValid)

function inputValid(even) {

spanValidElem.style.fontSize = `${even.target.value}px`
}