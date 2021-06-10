import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Event } from '../interface';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  searchTerm: string = '';
  searchCity: string = '';
  searchType: string = '';

  event: Event [] = [];
  constructor(public api: APIService) { }

  ngOnInit(): void {
    this.api.getEvents().subscribe((data)=>{
      this.event = data._embedded.events;
      //this.venue = data._embedded.venues;
      console.log(data._embedded);
    }) 
   }
    keywordSearch(): void {
      this.api.searchEvents({keyword: this.searchTerm, city: this.searchCity, classificationName: this.searchType}).subscribe((data)=>{
       if (data && data._embedded){
       this.event = data._embedded.events;
         console.log(this.event);
       }else{this.event = []}
      })
    }
  }