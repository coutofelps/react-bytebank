import { Account } from "./Account.js";

export class SavingAccount extends Account {
    constructor(balance, client, agency) {
        super(0, client, agency);
    }

    withdraw(ammount) {
        const tax = 1.02;

        return this._performWithdraw(ammount, tax);
    }
}