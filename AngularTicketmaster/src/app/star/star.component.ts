import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Event } from '../interface';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  
  event: Event [] = [];

  // toggle = true;
  // status = 'Enable'; 

  constructor(public star: StarService) { }

  ngOnInit(): void {
  }

  toggleFavorite(event: Event){
    this.star.toggleFavorite(event);
    // this.toggle = !this.toggle;
    // this.status = this.toggle ? 'Enable' : 'Disable';
  }

}
