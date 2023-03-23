function wordcount() {
  let str = prompt("enter the string"); //takes a statement

  let words = str.split(" "); //splits statement into an array with words as its elements.

  let wordMap = new Map(); //creating a map to store word and number of times it appeared.

  for (let word of words) {
    //itterating through each element of array using for of loop.
    let lowerWord = word.toLowerCase(); //converting each word to lowercase so that it can detect words in both upper and lowercase.
    if (wordMap.has(lowerWord)) {
      //checking if whether the map already containing that word or not.
      wordMap.set(lowerWord, wordMap.get(lowerWord) + 1); //if there, replacing earlier key value pair of word and its number to new one.
    } else {
      //otherwise simply adding the word to map.
      wordMap.set(lowerWord, 1);
    }
  }
  return wordMap; //returning the object we want.
}

// calling and printing wordcount function in console.
console.log(wordcount());
