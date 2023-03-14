let books = []; //creating an empty array to store objects.

while (true) {
  //creating a loop to take input from user. any number of times.

  let Name = prompt("enter book name");
  if (!Name) break; //user can stop giving input at any point of time by pressing cancel.
  let author = prompt("enter author name");
  let publishedYear = prompt("enter published year");

  let book = { Name, author, publishedYear }; //this is our actual object which stores every input.
  books.push(book); //every object as soon as it filled it is pushed into books array.
}
console.log("all books:");
console.log(books);

//filtered books section.

let newBooks = books
  .map((book) => {
    //creating a new object called new books. , using map hof to map all the key-value pairs of original object.
    return {
      Name: book.Name,
      author: book.author.toUpperCase(),
      publishedYear: book.publishedYear,
    };
  })
  .filter((book) => book.publishedYear >= 2010); //filters all books published in and after 2010.


console.log("books published after 2010 are:");
console.log(newBooks);
