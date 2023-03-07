 let but = document.getElementById("button");
let product = "";
let list = [];

but.addEventListener("click", addToList);

function addToList() {
  product = "";
  let item = prompt("Please enter the item name");
  product = item;

  for (let i = 0; i < list.length; i++) {
    if (product === list[i]) {
      console.log("This item is already added. Please enter any other item.");
      return; // Add a return statement to exit the function if item is already in the list
    }
  }

  list.push(product); // Use push() method to add the new item to the end of the list
  console.log(list);
}