const input = document.querySelector("#name-input");
let nameEl = document.querySelector("#name-output");

input.addEventListener('input', onInput);
function onInput(evt) {
   if (input.value === ""){
      nameEl.textContent = "Anonymous";
   } else{
     nameEl.textContent = evt.currentTarget.value.trim();
   };
}