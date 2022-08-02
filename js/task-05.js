const inputForm = document.querySelector('#name-input');
const outPutFrom = document.querySelector('#name-output');

inputForm.addEventListener("input", event => {  

    outPutFrom.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        outPutFrom.textContent = "Anonymous";
}
})


