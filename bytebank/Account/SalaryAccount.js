import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor(client) {
        super(0, client, 100);
    }

    withdraw(ammount) {
        const tax = 1.0;

        return this._performWithdraw(ammount, tax);
    }
}