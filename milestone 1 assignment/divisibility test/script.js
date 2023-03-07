let arr = [];
let n = prompt("Enter the number of elements in the array:");
for (let i = 0; i < n; i++) {
  let num = prompt(`Enter element ${i+1}:`);
  arr.push(Number(num));
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 !== 0) {
    continue;
  }
  if (arr[i] % 2 === 0) {
    continue;
  }
  console.log(arr[i]);
}