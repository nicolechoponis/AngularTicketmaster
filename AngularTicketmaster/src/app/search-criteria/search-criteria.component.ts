import { Component, Output, EventEmitter } from '@angular/core';
import { APIService } from '../api.service';
import { Event } from '../interface';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {

  @Output()search = new EventEmitter<{}>();

  searchTerm: string = '';
  searchCity: string = '';
  searchType: string = '';

  constructor(public api: APIService) { }

  keywordSearch() {
      this.search.emit({keyword: this.searchTerm, city: this.searchCity, classificationName: this.searchType})
  }
}