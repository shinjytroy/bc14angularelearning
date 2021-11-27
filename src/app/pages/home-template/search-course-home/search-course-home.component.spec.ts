import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseHomeComponent } from './search-course-home.component';

describe('SearchCourseHomeComponent', () => {
  let component: SearchCourseHomeComponent;
  let fixture: ComponentFixture<SearchCourseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCourseHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
