import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { NavbarAdminComponent } from './_components/navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    AdminTemplateComponent,
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminTemplateRoutingModule
  ]
})
export class AdminTemplateModule { }
