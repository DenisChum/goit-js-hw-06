const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  let { email, password } = event.target.elements;
  if (email.value === "" || password.value === "") {
    return alert("Please enter a valid input");
  }
  const object =  { email: email.value, Password: password.value };
  console.log(object);
  event.target.reset();
}
