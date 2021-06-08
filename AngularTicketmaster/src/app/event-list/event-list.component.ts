import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../api.service';
import { EventResponse, Event, Images, Dates, Start, PriceRanges, Seatmap, Venue } from '../interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  searchTerm: string = '';

  event: Event [] = [];
  constructor(public api: APIService) { }

  ngOnInit(): void {
   this.api.getEvents().subscribe((data)=>{
      this.event = data._embedded.events;
      //this.venue = data._embedded.venues;
      console.log(data._embedded);
    }) 
   }
}
