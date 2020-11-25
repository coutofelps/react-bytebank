export class Employee {
    constructor(CPF, name, salary) {
        this._CPF = CPF;
        this._name = name;
        this._salary = salary;
        this._bonus = 1;
        this._password;
    }

    get password() {
        return this._password;
    }

    createPassword(password) {
        this._password = password;
    }

    auth(password) {
        return password = this._password;
    }
}