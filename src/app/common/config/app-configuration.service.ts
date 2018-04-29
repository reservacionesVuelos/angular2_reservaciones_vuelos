import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppConfiguration {
  private config:String;

  constructor( ) {
    this.config = "http://localhost:8080";
    //this.config = "https://reservacionesvuelos.herokuapp.com";
  }

  get apiURL(): String {
    return this.config;
  }
}