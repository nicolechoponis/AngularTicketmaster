import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventResponse,Event} from './interface';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=3s3A0oZm22CsOcaUT6JjbUXQlEb2EuyL";
  Url = "https://app.ticketmaster.com/discovery/v2/events.json?";
  api_key = "3s3A0oZm22CsOcaUT6JjbUXQlEb2EuyL";
  eventDetailURL = "https://app.ticketmaster.com/discovery/v2/events/"
  constructor(public client: HttpClient) {}
  
  getEvents(){
    let pageURL=this.apiURL+"&page=1";
    return this.client.get<EventResponse>(this.apiURL, {params:{page:1}});
  }
  getEventDetails(id:string){
    let url = `${this.eventDetailURL}${id}.json?apikey=${this.api_key}`
    return this.client.get<Event>(url)

  //what is on line 13 for id is where we put the id that gets passed in 
  }
  searchEvents(searchParameters: any){
    let requestParameters: any = {
    apikey: this.api_key 
    }
    if (searchParameters.keyword.length > 0){
      requestParameters.keyword = searchParameters.keyword
    }
    if (searchParameters.city.length > 0){
      requestParameters.city = searchParameters.city
    }
    if(searchParameters.classificationName.length > 0){
      requestParameters.classificationName = searchParameters.classificationName
    }
    return this.client.get<EventResponse>(this.apiURL, {params: requestParameters});
  }
}