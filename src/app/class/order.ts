export class Order
{
    public nameMenu:    string;
    public nameUser:    string;
    public message:     string;
    public price:       number;
    public soldUser:    number;
    public date:        Date | void;


    constructor(nameMenu: string, nameUser: string, message: string, price: number, soldUser: number, date: Date | void)
    {
        this.nameMenu = nameMenu;
        this.nameUser = nameUser;
        this.message = message;
        this.price = price;
        this.soldUser = soldUser;
        this.date = date;
    }
}