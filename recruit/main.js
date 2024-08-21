import { getInterviews, getEmployees } from './asyncFunctions.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

// 여기에 코드를 작성하세요.
const employees = await getEmployees();
const interviews = await getInterviews();
const checkPass = interview => interview.result === "pass";
const hire = interview => addNewEmployee(employees, interview);
interviews.filter(checkPass).forEach(hire);
console.log(employees);

