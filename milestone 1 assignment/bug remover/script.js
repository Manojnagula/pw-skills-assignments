let but = document.getElementById("button");
let arr = [];
let newArr = [];
but.addEventListener("click", addItem);

function addItem() {
  let itemNumber = prompt("enter number of items");
  arr.push((itemNumber));
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] / 2;
  }
  console.log(newArr);
}

// let but = document.getElementById("button");
// let arr = [];

// but.addEventListener("click", addItem);

// function addItem() {
//   let itemNumber = prompt("Enter number of items");
//   arr.push(itemNumber);

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] / 2;
//   }
//   console.log(newArr);
// }
