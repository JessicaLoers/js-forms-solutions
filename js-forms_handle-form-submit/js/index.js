const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const from = new FormData(event.target);
  const fromData = Object.fromEntries(from);

  console.log('object of all input elements ', fromData);

  // The badness bonus
  console.log(`age-badness-sum is ${parseInt(fromData.badness, 10) + parseInt(fromData.age, 10)}`);
});
