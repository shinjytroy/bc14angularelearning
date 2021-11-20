import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrandCourseComponent } from './list-grand-course.component';

describe('ListGrandCourseComponent', () => {
  let component: ListGrandCourseComponent;
  let fixture: ComponentFixture<ListGrandCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrandCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrandCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
