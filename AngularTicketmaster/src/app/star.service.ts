import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventResponse, Event } from './interface';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  isFavorite!: boolean;
  favoriteList: Event[] = [];

  constructor(public client: HttpClient) { }


  toggleFavorite(event: Event){
    let foundEvent = this.favoriteList.includes(event);
    // console.log(foundEvent);
    if (foundEvent){
      event.isFavorite=false;
      let index = this.favoriteList.indexOf(event);
      console.log(index);
      this.favoriteList.splice(index, 1);
    }else {
      event.isFavorite=true;
      this.favoriteList.push(event);
    }
    console.log(this.favoriteList);
  }

  getFavorites(){
    return this.favoriteList;
  }

  // not sure if this is working
  onClick(){
    this.isFavorite = !this.isFavorite;
    console.log('Is favorite value: ' + this.isFavorite);
  }
}





// console.log(event.id);
// this.favoriteList.push(event);
// this.favoriteList.forEach((item, index) => {
//   if (event.id != item.id){
//     event.isFavorite=true;
//     this.favoriteList.push(event);
//   }else {
//     event.isFavorite=false;
//     this.favoriteList.splice(index, 1);
//   }
