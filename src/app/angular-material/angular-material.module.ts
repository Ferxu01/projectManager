import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatGridListModule],
  exports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
