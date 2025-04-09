import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerCourseComponent } from './viewer-course.component';

describe('ViewerCourseComponent', () => {
  let component: ViewerCourseComponent;
  let fixture: ComponentFixture<ViewerCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerCourseComponent]
    });
    fixture = TestBed.createComponent(ViewerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
