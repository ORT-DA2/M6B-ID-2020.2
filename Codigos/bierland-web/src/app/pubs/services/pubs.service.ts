import { Injectable } from '@angular/core';
import { Pub } from 'src/Models/Pub';

@Injectable({
  providedIn: 'root',
})
export class PubsService {
  pubs: Pub[] = new Array();
  constructor() {
    this.pubs.push(new Pub(1, 'MBC', 'Bulevar España 2614'));
    this.pubs.push(new Pub(2, 'MOB Prado', 'Av 19 de Abril 1070'));
    this.pubs.push(new Pub(3, 'BierHaus', 'Avenida Joaquín Suárez 3201'));
    this.pubs.push(new Pub(4, 'Cervecería Ramón', '21 de Setiembre 2323'));
  }

  getPubs(): Pub[] {
    return this.pubs;
  }

  addPub(name: string, address: string): void {
    const id = this.pubs.length + 1;
    this.pubs.push(new Pub(id, name, address));
  }
}
