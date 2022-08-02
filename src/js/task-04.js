let counterSum = {
    value: document.querySelector("#value"),
    value2: document.querySelector(`[data-action="decrement"]`),
    value3: document.querySelector(`[data-action="increment"]`)}

let counter = 0;
counterSum.value2.addEventListener("click", () => {
    counter -= 1;
    counterSum.value.textContent = counter;
})

counterSum.value3.addEventListener("click", () => {
counter += 1;
 counterSum.value.textContent = counter;
})


// const counterAdd = document.querySelector(“#value”);
// const buttonMinus = document.querySelector(`[data-action=“decrement”]`)
// const buttonPlus = document.querySelector(`[data-action=“increment”]`);
// let counter = 0;
// buttonMinus.addEventListener(“click”, () => {
//     counter -= 1;
//     counterAdd.textContent = counter;
// })
// buttonPlus.addEventListener(“click”, () => {
// counter += 1;
// counterAdd.textContent = counter;
// })