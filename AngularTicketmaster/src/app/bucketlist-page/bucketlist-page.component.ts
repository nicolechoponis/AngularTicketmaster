import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Event } from '../interface';

@Component({
  selector: 'app-bucketlist-page',
  templateUrl: './bucketlist-page.component.html',
  styleUrls: ['./bucketlist-page.component.css']
})
export class BucketlistPageComponent implements OnInit {

  event: Event [] = [];

  favoriteList: Event[] = [];

  // changed from private to public kk
  constructor(public star: StarService) { } 

  ngOnInit(): void {
    this.favoriteList=this.star.getFavorites();
  }

  toggleFavorite(event: Event){
    this.star.toggleFavorite(event);
  }

}
