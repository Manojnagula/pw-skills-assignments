function randomNumber() {
  let array = [];

  while (true) {
    let number = prompt("enter any number");

    if (number == null) {
      //user pressed cancel.
      break; //terminates loop as soon as cancel is pressed.
    }
    array.push(number); //pushing the number in already declared array.
  }
  let [first, second, ...last] = array; //using rest operator to pack remaining elements into last element.

  let end = last.pop(); //targeting,ladt element using pop method.

  let newArray = [first, second, end];

  return newArray;
}
console.log(randomNumber());
