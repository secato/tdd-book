import Employee, { Role } from "./Employee";

export default class SalaryCalculator {
  calculate(employee: Employee): number {
    switch (employee.role) {
      case Role.DEVELOPER:
        return calculateDeveloperSalary(employee);
      case Role.DBA:
        return calculateDbaSalary(employee);
      default:
        throw new Error(
          `Cannot proccess the payment for role ${employee.role}`
        );
    }
  }
}

function calculateDeveloperSalary(employee: Employee) {
  if (employee.salary < 3000) {
    return employee.salary * 0.9;
  } else {
    return employee.salary * 0.8;
  }
}

function calculateDbaSalary(employee: Employee) {
  if (employee.salary < 1500) {
    return employee.salary * 0.85;
  }
}
