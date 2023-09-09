const color = 'green';

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

const user = {
    title : "askljdh",
    author : "aosidfjapo8fapouh"
}

const sentencePrinter = ({ title, author }) => {
  return `${title} was written by ${author}`;
};

console.log(sentencePrinter(user));

/* console.log(book.printSentence()); */
