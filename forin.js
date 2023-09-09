const book = {
  id: 1,
  title: 'Zen',
  author: 'Lucy Broschek',
  price: 5,
  categories: ['Drama', 'Mistery'],
  image: 'http://dummyimage.com/244x100.png/dddddd/000000',
  available: true,
  amount: 100,
  printSentence: function () {
    return `${this.title} was written by ${this.author} and ${this.color}`;
  },
};

/* const numbers = [1, 2, 3, 4]

for(const number of numbers) {
    console.log(number);
}

numbers.forEach(number) {
    console.log(number);
} */

for (const property in book) {
  console.log(property, book[property]);
}
