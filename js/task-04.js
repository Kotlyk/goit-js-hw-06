let counterValue = 0;

const decdBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector("#value");

decdBtn.addEventListener('click', decrement);
function decrement (){
    counterValue -= 1;
    valueEL.textContent = counterValue;
};

incBtn.addEventListener("click", increment);
function increment (){
 counterValue += 1;
valueEL.textContent = counterValue;
};