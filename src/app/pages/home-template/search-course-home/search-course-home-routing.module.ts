import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCourseHomeComponent } from './search-course-home.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCourseHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCourseHomeRoutingModule { }
