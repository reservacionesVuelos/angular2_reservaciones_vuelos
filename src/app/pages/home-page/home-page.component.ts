import{Component, OnInit}from '@angular/core';
import {Popup} from 'ng2-opd-popup';
//local imports
import {Airline} from '../../models/airline'
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { UserService } from '../../services/user.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
  })
  export class HomePageComponent implements OnInit {
    private airlines: Airline[] = [];
    private typeFlights:String = 'Flights';
    private selectedFlight:Flight;
    private isAdult:boolean = false; 
    private cedule:number;

    constructor(private popup:Popup, private flightService:FlightService, private userService:UserService) { 

    }
  
    ngOnInit() {
      this.flightService.getAllFlights().subscribe(
        data => {
          this.airlines = data;
        }
      )
    }

    reservate(flight:Flight){
      this.selectedFlight=flight;
      this.popup.options = {
        header: "Make a reservation",
        color: "#5cb85c",
        widthProsentage: 40,
        animationDuration: 1,
        showButtons: true, 
        confirmBtnContent: "Reservate",
        cancleBtnContent: "Cancel",
        confirmBtnClass: "",
        cancleBtnClass: "",
        animation: "fadeInDown"
      };

      this.popup.show(this.popup.options);
    }

    confirmReservation(){
      if(this.isAdult){
        if(this.cedule != null){
          //try to create the reservation
          this.userService.joinFlight(this.cedule,this.selectedFlight).subscribe(
            data => {
              if (data){
                alert("Success, you have reserved the flight successfully ")
              }else{
                alert("Yoy cant reserve this flight, probably is because you already have a reserve for that day")
              }
              this.popup.hide();
            }
          );
          
        }
        else{
          alert("You need to specify the cedule number.")
        }
        

      }
      else{
        alert("You need to be adult to confirm the reservation.")
      }
      
    }

    cancelReservation(){
      
    }
  
  
  }