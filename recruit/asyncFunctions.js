export async function getEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const employees = await response.json();
  return employees;
}

export async function getInterviews() {
  const response = await fetch('https://learn.codeit.kr/api/interview-results');
  const interviews = await response.json();
  return interviews;
}
