export class User
{
    public email:       string;
    public firstname:   string;
    public name:        string;
    public order:       string[] | void;
    public password:    string;
    public solde:       number;

    constructor(email: string, firstname: string, name: string, order: string[] | void, password: string, solde: number)
    {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.solde = solde;
        this.order = order;
    }
}