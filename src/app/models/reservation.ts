import { Flight } from "./flight";
import { User } from "./user";


export class Reservation{
    private flight:Flight;
    private user:User;
    constructor(flight:Flight,user:User){
        this.flight = flight;
        this.user = user;
    }
}