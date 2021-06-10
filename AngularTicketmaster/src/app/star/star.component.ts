import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  
  constructor(public favorite: StarService) { }

  ngOnInit(): void {
  }

}
