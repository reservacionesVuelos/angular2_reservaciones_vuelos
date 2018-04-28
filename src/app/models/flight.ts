export class Flight{

    private flightImageUrl:String;
    private origin:String;
    private destiny:String;
    private flightDay:Date;
    private cost:number;
    private id:number;

    constructor(id:number,flightImageUrl:String,origin:String,destiny:String,flightDay:Date,cost:number){
        this.flightImageUrl = flightImageUrl;
        this.origin = origin;
        this.destiny = destiny;
        this.id = id;

    }
}