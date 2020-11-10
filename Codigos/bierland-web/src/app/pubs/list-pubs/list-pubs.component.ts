import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pub } from '../../../Models/Pub';
import { PubsService } from '../services/pubs.service';

@Component({
  selector: 'app-list-pubs',
  templateUrl: './list-pubs.component.html',
  styleUrls: ['./list-pubs.component.css'],
})
export class ListPubsComponent implements OnInit{
  pubs: Pub[];

  constructor(private pubservice: PubsService, private router: Router) {
    this.pubs = new Array();
  }

  ngOnInit(): void{
    this.pubs = this.pubservice.getPubs();
  }

  addPub(): void {
    this.router.navigate(['/new-pub']);
  }
}
