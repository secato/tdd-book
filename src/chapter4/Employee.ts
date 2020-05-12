export enum Role {
  DEVELOPER,
  DBA,
  TESTER,
}

export default class Employee {
  private _name: string;
  private _salary: number;
  private _role: Role;

  constructor(name: string, salary: number, role: Role) {
    this._name = name;
    this._salary = salary;
    this._role = role;
  }

  get name() {
    return this._name;
  }

  get salary() {
    return this._salary;
  }

  get role() {
    return this._role;
  }
}
