// find
const devices = [
  {name: 'GalxyNote', brnad: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'MacbookAir', brand: 'Apple'}
];

const myLabTop = devices.find(
  (element, index, array) => {
    console.log('index', index);
    return element.brand === 'Apple';
  }
);

console.log('mine', myLabTop);
console.log('--------------------------------');

// some
const numbers = [1, 3, 5, 7, 9];

const someReturns = numbers.some(
  (element, index, array) => {
    console.log('index', index);
    return element > 5;
  }
);
console.log('some', someReturns);
console.log('--------------------------------');

// every
const everyReturns = numbers.every(
  (element, index, array) => {
    console.log('index', index);
    return element > 5;
  }
);
console.log('every', everyReturns);