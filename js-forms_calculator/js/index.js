const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);

  const numberA = parseInt(formData.numberA, 10);
  const numberB = parseInt(formData.numberB, 10);

  if (formData.operator === 'addition') {
    result = add(numberA, numberB);
  } else if (data.operator === 'subtraction') {
    result = subtract(numberA, numberB);
  } else if (formData.operator === 'multiplication') {
    result = multiply(numberA, numberB);
  } else if (formData.operator === 'division') {
    result = divide(numberA, numberB);
  } else {
    result = null;
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
