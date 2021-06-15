import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { StarService } from '../star.service';
import { EventResponse, Event, Genre, Classification, Images, Dates, Start, PriceRanges, Seatmap, Venue } from '../interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event: Event [] = [];
  constructor(public api: APIService, public star: StarService) { }

  ngOnInit(): void {
   this.api.getEvents().subscribe((data)=>{
      this.event = data._embedded.events;
      let favorites = this.star.getFavorites();
      //this.venue = data._embedded.venues;
      favorites.forEach(event =>{
      this.event.forEach(item =>{
          if (event.isFavorite == true){
            item.isFavorite = true;
          }else {
            item.isFavorite = false;
          }
        })
        // item.isFavorite = false;
      } )
      console.log(this.event);
    }) 
   }
   keywordSearch(search:any) {
    this.api.searchEvents({keyword: search.keyword, city: search.city, classificationName: search.classificationName}).subscribe((data)=>{
      if (data && data._embedded){
      this.event = data._embedded.events;
        console.log(this.event);
      }else{this.event = []}
     })
   }
  toggleFavorite(event: Event){
    this.star.toggleFavorite(event);
  }

}