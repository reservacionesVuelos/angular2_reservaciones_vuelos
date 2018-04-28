import {Reservation} from './reservation'

export class User{
    private cedule:number;
    private birthdate:Date;
    private reservationList:Reservation[];
    constructor(cedule:number,birthdate:Date,reservationList:Reservation[]){
        this.cedule = cedule;
        this.birthdate = birthdate;
        this.reservationList = reservationList;
    }
}