let but = document.getElementById("button");
let cart=[];
let totalPrice = [];

let addItem = () => {
    
    let item =
    {   
        nameOfItem:"",
        numberOfItems:"",
        itemPrice:""
    };
    item.nameOfItem=prompt("Enter item name");
    item.numberOfItems=prompt("Enter number of items");
    item.itemPrice=prompt("Enter item price");
    cart.push(item);
    console.log(cart);
    totalPrice.push(item.numberOfItems*item.itemPrice);
    console.log("total price is:",totalPrice);
}
but.addEventListener("click",addItem);
