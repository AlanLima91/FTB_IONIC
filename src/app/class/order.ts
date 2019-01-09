import { User } from './user';
import { Type } from '@angular/compiler';
import { Menu } from './menu';

export class Order {
    public menu: Menu | void;
    public user: User | void;
    public price: number;
    public date: Date | void


    constructor(menu: Menu | void, user: User | void, price: number, date: Date | void) {
        this.menu = menu;
        this.user = user;
        this.price = price;
        this.date = date;
    }
}