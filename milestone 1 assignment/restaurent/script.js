let n = prompt("enter number of dishes you want");
let p = prompt("enter number of people");
let dishPrice=[];
for(let i=1;i<=n;i++){
  let price = 0;
  price = prompt(`enter price of dish ${i}`);
  dishPrice.push(price);
}

function sumOfPrices(){
  let sum = 0;   
  for(let i=0;i<dishPrice.length;i++)
  {
    sum += Number(dishPrice[i]);
  }
  return sum;
}
let costPerPerson = sumOfPrices()/p;

let bill={
  totalCost : sumOfPrices(),
  perPerson : costPerPerson
};
console.log(bill);
