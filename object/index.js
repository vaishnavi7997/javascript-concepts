const library = {
    name: "Krishna",
    books: [],
    totalBooks: 0,
    addBook: function (title) {
        this.books.push(title)
        this.totalBooks++;
     },
};

library.addBook("Python 11 hours");
library.addBook("C programmimg 18 hours");
library.addBook("Javascript 12 hours");

console.log(library.books);
console.log(library.totalBooks);