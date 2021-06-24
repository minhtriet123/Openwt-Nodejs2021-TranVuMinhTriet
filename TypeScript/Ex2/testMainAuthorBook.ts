
import { Author } from './classAuthor'
import { Book } from './classBook'
      // Test Author class
      let a1 = new Author("Tan Ah Teck", "ahteck@nowhere.com");
      console.log(a1);

      a1.setEmail="ahteck@somewhere.com";
      console.log(a1);
      console.log("name is: " + a1.getName);
      console.log("email is: " + a1.getEmail);

      // Test Book class
      let b1 = new Book("12345", "Java for dummies", a1, 8.8, 88);
      console.log(b1);

      b1.price=(9.9);
      b1.qty=(99);
      console.log(b1);
      console.log("isbn is: " + b1.isbn);
      console.log("name is: " + b1.name);
      console.log("price is: " + b1.price);
      console.log("qty is: " + b1.qty);
       // Author's toString()
      console.log("author is: " + b1.author.toString());
      console.log("author's name: " + b1.authorName);
      console.log("author's name: " + b1.author.getName);
      console.log("author's email: " + b1.author.getEmail);

// let author = new Author[2];
// author[0] = new Author("Tan Ah Teck", "ahteck@nowhere.com", 'm');

// author[1] = new Author("Paul Tan", "Paul@nowhere.com", 'm');

// // Declare and allocate a Book instance

// let javaDummy = new Book("Java for Dummy", author, 19.99, 99);
// console.log(javaDummy);  // toString()



// console.log(author[0]);  // Author's toString()

// let dummyBook = new Book("Java for dummy", author[0], 19.95, 99);  // Test Book's Constructor
// console.log(dummyBook);  // Test Book's toString()

// // Test Getters and Setters
// dummyBook.price = 29.95;
// dummyBook.qty = (28);
// console.log("name is: " + dummyBook.name);
// console.log("price is: " + dummyBook.price);
// console.log("qty is: " + dummyBook.qty);
// console.log("Author is: " + dummyBook.author);  // Author's toString()
// console.log("Author's name is: " + dummyBook.author[0].getName);
// console.log("Author's email is: " + dummyBook.author[0].getEmail);

// // Use an anonymous instance of Author to construct a Book instance