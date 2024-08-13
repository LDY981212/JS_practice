const numbers =[1, 10, 4, 21, 3600];

// deep copy
const dup = numbers.slice();
numbers.sort((a, b) =>  a - b);
console.log('numbers', numbers);
console.log('dups', dup);

// mutable
numbers.sort((a, b) => b - a);
console.log('numbers', numbers);

// reverse
const letters = ['a', 'c', 'b'];
letters.reverse();
console.log('letters', letters);