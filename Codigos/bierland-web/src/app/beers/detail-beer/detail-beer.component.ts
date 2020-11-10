import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/Models/Beer';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-detail-beer',
  templateUrl: './detail-beer.component.html',
  styleUrls: ['./detail-beer.component.css'],
})
export class DetailBeerComponent implements OnInit {
  beer: Beer;
  constructor(
    private beersService: BeersService,
    private currentRoute: ActivatedRoute
  ) {
    this.beer = null;
  }

  ngOnInit(): void {
    let id = +this.currentRoute.snapshot.params['id'];
    this.beer = this.beersService.getBeerById(id);
  }
}
