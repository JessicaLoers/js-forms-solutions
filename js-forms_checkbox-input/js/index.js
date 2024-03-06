const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

// --v-- Bonus: Success message! --v--
const successMessageElemeent = document.querySelector('[data-js="success"]');

function hideSuccess() {
  successMessageElemeent.setAttribute('hidden', '');
}

function showSuccess() {
  successMessageElemeent.removeAttribute('hidden');
}
// --^-- Bonus: Success message! --^--

function hideTosError() {
  tosError.setAttribute('hidden', '');
}

hideTosError();
hideSuccess();

function showTosError() {
  tosError.removeAttribute('hidden');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const form = new FormData(event.target);
  const fromData = Object.fromEntries(form);

  if (fromData.tos) {
    hideTosError();
    showSuccess();
  } else {
    showTosError();
    hideSuccess();
    return;
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert('Form submitted');
});
