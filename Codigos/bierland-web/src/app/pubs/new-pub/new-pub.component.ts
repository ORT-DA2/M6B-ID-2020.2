import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PubsService } from '../services/pubs.service';

@Component({
  selector: 'app-new-pub',
  templateUrl: './new-pub.component.html',
  styleUrls: ['./new-pub.component.css'],
})
export class NewPubComponent {
  name: string;
  address: string;
  constructor(private pubService: PubsService, private router: Router) {
    this.name = '';
    this.address = '';
  }

  createPub(): void {
    this.pubService.addPub(this.name, this.address);
    this.router.navigate(['/pubs']);
  }
}
