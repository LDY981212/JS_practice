// index.html의 p 요소를 얻어오기
const pElement = document.querySelector('p');
console.log(pElement);

// p 요소에 event 추가하기
pElement.addEventListener('click',function(e) {
  console.log(e);
});

