import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from './users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bierland-web';
  logued = false;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.isLogued();
  }

  isLogued(): void {
    this.logued = this.usersService.isLogued();
  }

  logout(): void {
    this.usersService.logout();
    localStorage.clear();
    this.logued = false;
  }

  onActivate($event): void {
   this.isLogued();
  }
}
