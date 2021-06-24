import { Customer } from "./classCustomer";
export class Account {
    private _id: number
    private _customer: Customer
    private _balance: number

    constructor(id: number, cus: Customer, bala: number = 0.0) {
        this._id = id
        this._customer = cus
        this._balance = bala
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number
    ) {
        this._id = id;
    }

    public get customer(): Customer {
        return this._customer;
    }

    public set customer(customer: Customer
    ) {
        this._customer = customer;
    }

    public get blance(): number {
        return this.blance;
    }

    public set balance(blance: number
    ) {
        this._balance = blance;
    }
    toString() {
        return `${this._customer.toString()} balance=${this._balance}`
    }
    public get customerName(): string {
        return this._customer.name;
    }
    deposit(amount : number): Account {
        return new Account(this._id,this._customer,amount)
    }
    withdraw(amount : number): Account {
        if (this._balance>=amount) return new Account(this._id,this._customer,amount)
        else console.log('Amount withdrawn exceeds the current balance')
    }
}