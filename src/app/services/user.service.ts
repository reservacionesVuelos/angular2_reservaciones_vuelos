import{Injectable}from'@angular/core';
import { APIService } from '../common/api.service';
import { Http } from '@angular/http';

//local imports
import { AppConfiguration } from '../common/config/app-configuration.service';

@Injectable()
export class UserService  extends APIService{
    private resourceUrl: string = 'user';

    constructor(public config:AppConfiguration,public http:Http) {
        super(config, http);
      }
}