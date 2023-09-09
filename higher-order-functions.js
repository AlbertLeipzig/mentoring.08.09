import booksData from './books-data.json' assert { type: 'json' };

//map(), filter(), reduce(), sort(), forEach()

const user = {
  firstName: 'Adda',
  lastName: 'Müller',
  age: 56,
};

const numbers = [1, 2, 3, 4];
const numbers2 = [3, 6, 1, 6, 3];

const letters = ['a', 's', 'f', 'g', 'q', 'd'];

// filter()
// sort()
// forEach()
// map()
// reduce()

// filter => rausfiltrieren

const oddNumbers = numbers.filter((number) => number > 100);

//numbers.sort((number)=> );

const sortedLetters = letters.sort();

// numbers.forEach((number)=> );

/* booksData.forEach((book) => console.log(`Frohe Weihnachten ${book.author}!`)); */

// numbers.map((number)=> );

const authors = booksData.map((book) => book.author);

/* console.log(authors.every((author) => typeof author === "string")); */

/* console.log(authors); */

// numbers.reduce((acc, red)=> );

//const numbers2 = [3, 6, 1, 6, 3];

const result = numbers2.reduce((acc, curr) => acc + curr, 0);

const lastLetter = letters.reduce((acc, curr) => (acc > curr ? acc : curr), 0);

/* console.log(lastLetter); */
// [3, 6, 1, 6, 3]
// [9, 1, 6, 3]
// [10, 6, 3]
// [16, 3]
// [19]

/* for (let i = 0; i < authors.length; i++) {
  console.log(authors[i]);
} */

//const numbers = [1, 2, 3, 4];

numbers.forEach((number, i, array) => {
  const sentence = `The number ${number} hat the ${i} index in ${array}`;
  i % 3 === 0 ? console.log(sentence) : null;
});
