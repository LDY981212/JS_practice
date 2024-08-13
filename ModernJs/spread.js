const webPubulishing = ['HTML', 'CSS'];
console.log('wp', typeof webPubulishing);
const interactiveWeb = [...webPubulishing, 'JS'];

console.log('iw', interactiveWeb);

let iw2 = ['JS'];
// unrolling (no loop)
//iw2.unshift('CSS');
//iw2.unshift('HTML');
//console.log('iw2', iw2);

for (let i = webPubulishing.length -1; i >= 0; i--)  {
  iw2.unshift(webPubulishing[i]);
}
console.log('iw2', iw2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);
//spread array into array

//spread array into object

const members = ['Jay', 'Kay', 'El'];
const newObject = {...members};

console.log('no', newObject);

//spread object into array

