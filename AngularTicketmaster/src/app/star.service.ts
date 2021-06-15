import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventResponse, Event } from './interface';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  id: string = '';

  isFavorite!: boolean;
  favoriteList: Event[] = [];

  constructor(public client: HttpClient) {}

  //   foundFavorite(event: Event){
  //   if (event.isFavorite = true){
  //     button.addClass()
  //   }else {

  //   }
  // }

  toggleFavorite(event: Event) {
    let foundEvent = this.favoriteList.find((item) => event.id === item.id);
    // console.log(foundEvent);
    if (foundEvent) {
      event.isFavorite = false;
      let index = this.favoriteList.findIndex((item) => event.id === item.id);
      console.log(index);
      this.favoriteList.splice(index, 1);
    } else {
      event.isFavorite = true;
      this.favoriteList.push(event);
    }
    console.log(this.favoriteList);
  }

  getFavorites() {
    return this.favoriteList;
  }

  // not sure if this is working
  onClick() {
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
