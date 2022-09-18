const categEl = document.querySelectorAll('.item');
console.log('Number of categories:', categEl.length);


console.log(categEl);


categEl.forEach(function (item) {
  const titleEl = item.firstElementChild.textContent;
  const amountEl = item.lastElementChild.childElementCount;
  console.log(`Category:`, titleEl);
  console.log(`Elements:`, amountEl);
});


// for (let i = 0; i < categEl.length; i+=1) {
//     const titleEl = categEl[i].firstElementChild.textContent;
//     const amountEl = categEl[i].lastElementChild.childElementCount;
//     console.log(`Category:`, titleEl);
//     console.log(`Elements:`, amountEl);
    
// }




