const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(element => {
  sum += element;
});
console.log('sum', sum);

const sumAll = numbers.reduce(
  (accumulator, element, index, array) => {
    console.log('accumulator', accumulator);
    return accumulator + element;
  }, 0
);
console.log('sumAll', sumAll);

const factorialFor = function(number){
  let product = 1;
  for(number of numbers){
    product *= number;
  } 
  return product;
};

let factorialForEach = 1;
numbers.forEach((element, index, array) => {
  factorialForEach *= element;
});

const facotorial = numbers.reduce(
  (accumulator, element, index, array) => {
    return accumulator * element;
  }, 1
);

console.log('factorial', facotorial);
console.log('factorialFor', factorialFor());
console.log('factorialForEach', factorialForEach);