import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { interface } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=3s3A0oZm22CsOcaUT6JjbUXQlEb2EuyL";
  constructor(public client: HttpClient) {}
  
  //change to getEvents
  getEvents(){
    return this.client.get<Event>(this.apiURL);
  }
  
}
