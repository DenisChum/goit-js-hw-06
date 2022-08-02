const inputValidElem = document.querySelector('#validation-input');

inputValidElem.addEventListener('blur', onValidElemBlur)

function onValidElemBlur() {
    if (inputValidElem.value.length === Number(inputValidElem.dataset.length)) {
        inputValidElem.classList.remove('invalid');
        inputValidElem.classList.add('valid')
    } else {
    inputValidElem.classList.remove('valid');
        inputValidElem.classList.add('invalid')
    }
}

