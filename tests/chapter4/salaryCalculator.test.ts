import SalaryCalculator from "../../src/chapter4/SalaryCalculator";
import Employee, { Role } from "../../src/chapter4/Employee";

let calculator: SalaryCalculator;

beforeEach(() => {
  calculator = new SalaryCalculator();
});

describe("Salary calculator", () => {
  describe("Developer", () => {
    test("Calculate salary of developer with salary < 3000", () => {
      let employee = new Employee("Felipe", 1500, Role.DEVELOPER);
      let salary = calculator.calculate(employee);
      expect(salary).toBe(employee.salary * 0.9);
    });

    test("Calculate salary of developer with salary > 3000", () => {
      let employee = new Employee("Felipe", 4000, Role.DEVELOPER);
      let salary = calculator.calculate(employee);
      expect(salary).toBe(employee.salary * 0.8);
    });
  });

  describe("DBA", () => {
    test("Calculate salary of DBA with salary < 1500", () => {
      let employee = new Employee("Felipe", 500, Role.DBA);
      let salary = calculator.calculate(employee);
      expect(salary).toBe(employee.salary * 0.85);
    });
  });
});
