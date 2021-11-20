import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGrandComponent } from './course-grand.component';

describe('CourseGrandComponent', () => {
  let component: CourseGrandComponent;
  let fixture: ComponentFixture<CourseGrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
