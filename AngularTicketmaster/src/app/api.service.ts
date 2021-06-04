import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "https://www.reddit.com/r/aww/.json";
  constructor(public client: HttpClient) {}
  
  //change to getEvents
  getBlog(){
    return this.client.get<Post>(this.apiURL);
  }
  
}
