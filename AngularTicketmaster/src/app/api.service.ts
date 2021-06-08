import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventResponse} from './interface';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=3s3A0oZm22CsOcaUT6JjbUXQlEb2EuyL";
  constructor(public client: HttpClient) {}
  
  getEvents(){
    let pageURL=this.apiURL+"&page=1";
    return this.client.get<EventResponse>(pageURL);
    //this is where we will need to put in our 3 parameters (search, etc)
  }
}