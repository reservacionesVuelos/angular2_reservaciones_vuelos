import {Flight} from './flight'
export class Airline{

    private name:String;
    private flightList: Flight[];
    constructor(name:string, flightList: Flight[]){
        this.name = name;
        this.flightList = flightList;

    }
}