import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatGridListModule],
  exports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
