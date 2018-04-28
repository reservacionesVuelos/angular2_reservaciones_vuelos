import{Component, OnInit}from '@angular/core';
import {Popup} from 'ng2-opd-popup';
//local imports
import {Airline} from '../../models/airline'
import { FlightService } from '../../services/flight.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
  })
  export class HomePageComponent implements OnInit {
    private airlines: Airline[] = [];
    private typeFlights:String = 'All flights';
    private selectedFlightId = -1;
    private isAdult:boolean = false; 
    private cedule:number;

    constructor(private popup:Popup, private flightService:FlightService) { 

    }
  
    ngOnInit() {
      this.flightService.getAllFlights().subscribe(
        data => {
          this.airlines = data;
          console.log(this.airlines);
        }
      )
    }

    reservate(flightId:number){
      this.selectedFlightId=flightId;
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
          this.popup.hide();
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