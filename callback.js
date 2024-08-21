function sayHello() {
  console.log('hello');
}

console.log('1');
console.log('2');

setTimeout(
  sayHello, 1000
);

console.log('3');