const form = document.getElementById('form');

function getFormValue(event) {
  event.preventDefault(); 
  const name = form.querySelector('[name="name"]') //получаем поле name
  // age = form.querySelector('[name="age"]'), //получаем поле age
  // terms = form.querySelector('[name="terms"]'), //получаем поле terms
  // plan = form.querySelector('[name="plan"]'); //получаем поле plan
  const data = {
    name: name.value,
    // age: age.value,
    // plan: plan.value,
    // terms: terms.checked
  };
  console.log(data);}















form.addEventListener('submit', getFormValue);