import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { StarService } from '../star.service';
import {
  EventResponse,
  Event,
  Genre,
  Classification,
  Images,
  Dates,
  Start,
  PriceRanges,
  Seatmap,
  Venue,
} from '../interface';
import { isNgTemplate } from '@angular/compiler';
import { ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  event: Event[] = [];
  constructor(public api: APIService, public star: StarService) {}

  ngOnInit(): void {
    this.api.getEvents().subscribe((data) => {
      this.event = data._embedded.events;
      let favorites = this.star.getFavorites();
      console.log(favorites);
      //this.venue = data._embedded.venues;
      this.event.forEach((item) => {
        let found = favorites.find((fav) => fav.id === item.id);
        item.isFavorite = false;
        if (found) {
          item.isFavorite = true;
        }
      });
      console.log(this.event);
    });
  }
  keywordSearch(search: any) {
    this.api
      .searchEvents({
        keyword: search.keyword,
        city: search.city,
        classificationName: search.classificationName,
      })
      .subscribe((data) => {
        if (data && data._embedded) {
          this.event = data._embedded.events;
          console.log(this.event);
        } else {
          this.event = [];
        }
      });
  }
  toggleFavorite(event: Event) {
    this.star.toggleFavorite(event);
  }
}
