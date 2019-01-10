import { Order } from './order';

export class User
{
    public name:        string;
    public firstname:   string;
    public email:       string;
    public password:    string;
    public solde:       number;
    public order:       Order[] | void;

    constructor(name: string, firstname: string, email: string, password: string, solde: number, order: Order[] | void) {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.solde = solde;
        this.order = order;
    }
}