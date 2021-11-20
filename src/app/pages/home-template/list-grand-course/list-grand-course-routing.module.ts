import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGrandCourseComponent } from './list-grand-course.component';

const routes: Routes = [
  {
    path:'',
    component: ListGrandCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGrandCourseRoutingModule { }
