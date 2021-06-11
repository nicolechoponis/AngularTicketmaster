import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { EventResponse, Event, Genre, Classification, Images, Dates, Start, PriceRanges, Seatmap, Venue } from '../interface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.css']
})
export class EventDetailPageComponent implements OnInit {
  id: string ='';
  event: any= {};
  constructor (public api: APIService, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = params['id'];
    this.api.getEventDetails(this.id).subscribe((data)=>{
    this.event = data;
      //this.venue = data._embedded.venues;
      console.log(data);
      //different call passing the id to get
    }) 
  });
 }}
