const colorBtn = document.querySelector("button");
console.dir(colorBtn);


colorBtn.addEventListener("click", onClick);
function onClick(getRandomHexColor) {
  document.body.style.background =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
};
  




// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };
