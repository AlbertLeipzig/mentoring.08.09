import booksData from './books-data.json' assert { type: 'json' };

const book = booksData[0];

/* 
const book = {
  id: 1,
  title: 'Zen',
  author: 'Lucy Broschek',
  price: 5,
  categories: 'Drama',
  image: 'http://dummyimage.com/244x100.png/dddddd/000000',
};
*/

const { author } = book;

/* const { author, title, id, price, categories, image } = book; */

// GOAL : "Lucy Broschek wrote Zen"

// GOAL : `${author} wrote ${title}`

const printBookInfo = ({ author, title, id, price, categories, image }) => {
  console.log(
    `${author} wrote ${title} that cost ${price} and hat categories ${categories}`
  );
};
/* const printBookInfo = (book) => {
  console.log(`${book.author} wrote ${book.title} that cost ${book.price} and hat categories ${book.categories}`);
}; */

/* const { author, title, id, price, categories, image } = book; */

/* printBookInfo(book); */

const parameter = 'lksdjflskdjf';

console.log({book, author, parameter});
