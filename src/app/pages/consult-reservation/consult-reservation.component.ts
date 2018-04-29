import{Component, OnInit}from '@angular/core';
import { UserService } from '../../services/user.service';
import { Flight } from '../../models/flight';


@Component({
    selector: 'app-home-page',
    templateUrl: './consult-reservation.component.html',
    styleUrls: ['./consult-reservation.component.css']
})
export class ConsultReservationComponent implements OnInit {
    private selectedCedule : number;
    private reservationTitle : String = "Find reservations for a persson";
    private flights: Flight[] = [];

    constructor(private userService:UserService){

    }

    ngOnInit(): void {
        
    }

    consultReservations(){
        if(this.selectedCedule !=null){
            this.userService.obtainReservedFlights(this.selectedCedule).subscribe(
                result => {
                    this.flights = result;
                  },
                  error => {
                    this.flights = [];
                    alert(error);
                    
                  }
            )
        }
    }

    cleanPage(){
        this.selectedCedule = null;
        this.flights = [];

    }
}