import { Employee } from "./Employee.js";

export class Director extends Employee {
    constructor(CPF, name, salary) {
        super(CPF, name, salary);
        this._bonus = 2;
    }
}