import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGrandCourseRoutingModule } from './list-grand-course-routing.module';
import { ListGrandCourseComponent } from '../list-grand-course/list-grand-course.component';
import { CourseGrandComponent } from './course-grand/course-grand.component';


@NgModule({
  declarations: [
    ListGrandCourseComponent,
    CourseGrandComponent
  ],
  imports: [
    CommonModule,
    ListGrandCourseRoutingModule
  ]
})
export class ListGrandCourseModule { }
