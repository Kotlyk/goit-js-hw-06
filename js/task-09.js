const colorBtn = document.querySelector("button");
const colorText = document.querySelector(".color");


colorBtn.addEventListener("click", onClick);
function onClick(getRandomHexColor) {
  document.body.style.background =
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorText.textContent = document.body.style.background;
};
  




// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };
