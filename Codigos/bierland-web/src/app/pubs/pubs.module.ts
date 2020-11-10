import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPubsComponent } from './list-pubs/list-pubs.component';
import { NewPubComponent } from './new-pub/new-pub.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListPubsComponent, NewPubComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListPubsComponent, NewPubComponent]
})
export class PubsModule { }
