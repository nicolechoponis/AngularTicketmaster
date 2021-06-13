import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Event } from '../interface';

@Component({
  selector: 'app-bucketlist-page',
  templateUrl: './bucketlist-page.component.html',
  styleUrls: ['./bucketlist-page.component.css']
})
export class BucketlistPageComponent implements OnInit {

  favoriteList: Event[] = [];

  constructor(private star: StarService) { }

  ngOnInit(): void {
    this.favoriteList=this.star.getFavorites();
  }

}
