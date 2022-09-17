const input = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");


input.value = 56;
input.addEventListener('input', onInput);
function onInput() {
    textSize.style.fontSize = input.value + 'px';
}