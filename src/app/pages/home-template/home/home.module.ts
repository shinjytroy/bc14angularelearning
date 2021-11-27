import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChildHomeComponent } from './child-home/child-home.component';
import { FormsModule } from '@angular/forms';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';




@NgModule({
  declarations: [
    HomeComponent,
    ChildHomeComponent,
    CarouselHomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    MaterialModule,
  ]
})
export class HomeModule { }
