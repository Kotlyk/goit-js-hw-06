let counterValue = 0;

const decdBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector("#value");

decdBtn.addEventListener('click', onClickDecrement);
function onClickDecrement() {
  counterValue -= 1;
  valueEL.textContent = counterValue;
};

incBtn.addEventListener("click", onClickIncrement);
function onClickIncrement() {
  counterValue += 1;
  valueEL.textContent = counterValue;
};