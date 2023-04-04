function logBookTitles(books, callback) {
  const bookTitles = books.map((book) => book.title);

  bookTitles.sort();

  callback(bookTitles);
}
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];
function logTitles(bookTitles){
  console.log("book Titles:");
  bookTitles.forEach(title => console.log(title));
}
logBookTitles(books,logTitles);