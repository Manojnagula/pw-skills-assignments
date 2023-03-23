function swap(x, y) {
    let array = [x, y];
    [x, y] = [y, x]; // destructuring assignment to swap the values of x and y
    return [x, y];
  }
  
  let x = prompt("enter any number");
  let y = prompt("enter another number");
  
  console.log(swap(x, y));
  