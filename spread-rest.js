const numbers = [1, 2, 3, 4, 5];

const numbers3 = numbers;

const numbers2 = [...numbers];

console.log({ numbers, numbers2 });

numbers2.push(123);

console.log({ numbers, numbers2 });

const companies = [
    {
        id :"asldkfjho3yoefiuh",
        name : "Bosch"
    }
]


const rawProduct = {
  title: 'maschine',
  model : "THIS MODESL",
  company: 'asldkfjho3yoefiuh',
  price : "123",
  address : "",
};

/* const product2 = {...product1}; */

const product = [];

rawProduct.forEach((product) => {
  product.push(product);
});
