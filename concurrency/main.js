import { getEmployees, getMenus } from './asyncFunctions.js';

// 여기에 코드를 작성하세요.
// 동시가 아닌 것은?
//순차적(동기적)으로 직원 데이터 -> 메뉴 데이터 가져오기!
const employees = await getEmployees();
const menus = await getMenus(); 

// 테스트 코드
console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);

// Promise.then을 쓴다면
getEmployees().then(employees => {
  console.log('직원 데이터:');
  console.log(employees);
})

getMenus().then(menus => {
  console.log('메뉴 데이터:');
  console.log(menus);
})