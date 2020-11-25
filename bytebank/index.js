import { Client } from "./Client.js"
import { SavingAccount } from "./Account/SavingAccount.js"
import { SalaryAccount } from "./Account/SalaryAccount.js";
import { FlowingAccount } from "./Account/FlowingAccount.js"

// Accounts and Clients

const client = new Client('Marcos Couto', 11122233344);
const flowingAccount = new FlowingAccount(client, 1001);

flowingAccount.deposit(500);
flowingAccount.withdraw(100);

const savingAccount = new SavingAccount(50, client, 1001);
savingAccount.withdraw(10);

const salaryAccount = new SalaryAccount(client);
salaryAccount.deposit(100);
salaryAccount.withdraw(10);

console.log(flowingAccount);
console.log(savingAccount);
console.log(salaryAccount);

// Employees

import { AuthSystem } from "./AuthSystem.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";

const manager = new Manager('Maria Eduarda', 5000, 99900011122);
manager.createPassword('123456789');

const director = new Director("Marcos Felipe", 10000, 55566677788);
director.createPassword('123456789');

const clientTryingToLogin = AuthSystem.login(client, '123456789');
const managerTryingToLogin = AuthSystem.login(manager, '123456789');
const directorTryingToLogin = AuthSystem.login(director, '123456789');

console.log(clientTryingToLogin, managerTryingToLogin, directorTryingToLogin);