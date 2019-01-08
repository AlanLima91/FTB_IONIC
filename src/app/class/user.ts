export class User
{
    public name:        string;
    public firstname:   string;
    public email:       string;
    public password:    string;
    public solde:       number;

    constructor(name: string, firstname: string, email: string, password: string, solde: number)
    {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.password = password;
        this.solde = solde;
    }
}
