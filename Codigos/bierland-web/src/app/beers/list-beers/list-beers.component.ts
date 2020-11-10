import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../../../Models/Beer';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css'],
})
export class ListBeersComponent implements OnInit {
  beers: Beer[];
  Arr = Array;
  constructor(private beersService: BeersService, private router: Router) {
    this.beers = new Array();
  }

  ngOnInit(): void{
    this.beers = this.beersService.getBeers();
  }

  getDetail(id: number): void {
    this.router.navigate(['/detail-beer', id]);
  }
}
