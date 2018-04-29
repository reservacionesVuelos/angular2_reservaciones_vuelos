import {Reservation} from './reservation'

export class User{
    private cedule:number;
    private reservationList:Reservation[];
    constructor(cedule:number,reservationList:Reservation[]){
        this.cedule = cedule;
        this.reservationList = reservationList;
    }
}