import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeroComponent } from './primero/primero.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './services/servicio.service';



@NgModule({
  declarations: [PrimeroComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PrimeroComponent],
  providers: [ServicioService]
})
export class ModuloModule { }
