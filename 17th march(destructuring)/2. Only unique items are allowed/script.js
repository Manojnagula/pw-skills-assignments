let numbers = []; //declaring an empty array to store numbers.
while (true) {
  let number = prompt(
    "enter the number and press ok, To stop giving input press cancel"
  );

  if (number == null) {
    //user pressed cancel.
    break;
  }
  numbers.push(number); //adding numbers into array.
}

function removeDuplicates() {
    let nums = new Set();

  //function to remove duplicates.
  for (let num of numbers) {
    //using for of loop.
    nums.add(num);
  }

  let newNums = [...nums]; //using spread operator to make set as array.
  console.log(newNums);
}

removeDuplicates();
