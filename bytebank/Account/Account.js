export class Account {
    constructor(client, agency, balance) {
        if(this.constructor == Account) {
            throw new Error('CANNOT use account class directly!');
        }
        
        this._client = client;

        this._agency = agency;
        this._balance = balance;
    }

    // Getters and setters

    set client(newValue) {
        if(newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    // Functions

    test() {
        console.log('Testing account main class');
    }

    // Método abstrato
    withdraw(ammount) {
        // Método foi sobrescrito em todas suas classes filhas, não necessitando ser implementado aqui.
        throw new Error('This is an abstract method. Do not call directly!');
    }

    _performWithdraw(ammount, tax) {
        const valueWithTax = tax * ammount;

        if(this._balance >= valueWithTax) {
            this._balance -= valueWithTax;

            return this.ammount;
        }

        return 0;
    }

    deposit(ammount) {
        if(this.ammount <= 0) {
            return;
        }

        this._balance += ammount;
    }

    transfer(ammount, target) {
        const requiredAmmount = this.withdraw(ammount);

        target.deposit(requiredAmmount);
    }
}