import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(CPF, name, salary) {
        super(CPF, name, salary);
        this._bonus = 1.1;
    }
}