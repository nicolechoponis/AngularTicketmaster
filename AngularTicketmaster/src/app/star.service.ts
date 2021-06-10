import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventResponse} from './interface';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  isFavorite: boolean;

  constructor(public client: HttpClient) { }


  onClick(){
    this.isFavorite = !this.isFavorite;
    console.log('Is favorite value: ' + this.isFavorite);
  }
}
