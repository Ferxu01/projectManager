import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    AddProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AngularMaterialModule
  ]
})
export class ProjectModule { }
