import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-grand',
  templateUrl: './course-grand.component.html',
  styleUrls: ['./course-grand.component.scss']
})
export class CourseGrandComponent implements OnInit {
 @Input() course: any;
  userInfo: any;
  authProfile: any;
  constructor(

  ) { }

  ngOnInit(): void {
    
  }
  
}
