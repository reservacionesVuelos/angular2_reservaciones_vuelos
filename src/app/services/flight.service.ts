import{Injectable}from'@angular/core';
import { APIService } from '../common/api.service';
import { Http } from '@angular/http';

//local imports
import { AppConfiguration } from '../common/config/app-configuration.service';

@Injectable()
export class FlightService  extends APIService{
    private resourceUrl: string = 'flight';

    constructor(public config:AppConfiguration,public http:Http) {
        super(config, http);
      }

    getAllFlights(){
        return this.get(this.resourceUrl+'/');
    }

    getFlightsByOriginLocation(originLocation:String){
        return this.get(this.resourceUrl+'/origin/'+originLocation);
    }
}