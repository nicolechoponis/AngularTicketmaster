import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { EventResponse, Event, Genre, Classification, Images, Dates, Start, PriceRanges, Seatmap, Venue } from '../interface';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})
export class EventDetailPageComponent implements OnInit {

  event: Event [] = [];
  constructor (public api: APIService) { }
  
  ngOnInit(): void {
  this.api.getEvents().subscribe((data)=>{
    this.event = data._embedded.events;
    //this.venue = data._embedded.venues;
    console.log(data._embedded);
  }) 
 }}
