const input = document.querySelector("#name-input");
let nameEl = document.querySelector("#name-output");

input.addEventListener('input', onInput);
function onInput(evt) {
   nameEl.textContent = evt.currentTarget.value.trim();
};
