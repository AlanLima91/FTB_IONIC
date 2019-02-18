export class User
{
    public name:        string;
    public orderKeys:   any[] | void;
    public firstname:   string;
    public email:       string;
    public password:    string;
    public solde:       number;
    public admin:       boolean;

    constructor(email: string, firstname: string, name: string, order: any[] | void, password: string, solde: number, admin: boolean)
    {
        this.name       = name;
        this.firstname  = firstname;
        this.email      = email;
        this.password   = password;
        this.solde      = solde;
        this.orderKeys  = order;
        this.admin      = admin;
    }
}