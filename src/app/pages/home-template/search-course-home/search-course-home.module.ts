import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCourseHomeRoutingModule } from './search-course-home-routing.module';
import { SearchCourseHomeComponent } from './search-course-home.component';


@NgModule({
  declarations: [
    SearchCourseHomeComponent
  ],
  exports: [
    SearchCourseHomeComponent
  ],
  imports: [
    CommonModule,
    SearchCourseHomeRoutingModule
  ]
})
export class SearchCourseHomeModule { }
