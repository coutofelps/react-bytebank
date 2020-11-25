export class Client {
    constructor(name, CPF, password) {
        this.name = name;
        this._CPF = CPF;
        this._password = password;
    }

    get CPF() {
        return this._CPF;
    }

    auth() {
        return true;
    }
}