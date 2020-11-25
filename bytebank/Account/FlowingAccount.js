import { Account } from "./Account.js";

export class FlowingAccount extends Account {
    static accountCounter = 0;

    constructor(client, agency) {
        super(0, client, agency);

        FlowingAccount.accountCounter += 1;
    }

    test() {
        super.test();
        console.log('Testing flowing account class');
    }

    // Sobreescrevendo o comportamendo da classe
    withdraw(ammount) {
        let tax = 1.1;

        return this._performWithdraw(ammount, tax);
    }
}