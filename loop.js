const numbers = [1, 2, 3];
let sum = 0;
// forEach: higer order function
numbers.forEach(
  // callback
  function(element, index, array) {
    //console.log(element, index, array);
    sum += element;
  }
);
console.log('sum', sum);
sum = 0;
numbers.forEach(
  (element, index, array) => {
    sum += element;
  }
);
console.log('sum', sum);
// map
// filter

