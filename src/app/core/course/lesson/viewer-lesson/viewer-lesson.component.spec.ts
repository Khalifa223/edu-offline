import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerLessonComponent } from './viewer-lesson.component';

describe('ViewerLessonComponent', () => {
  let component: ViewerLessonComponent;
  let fixture: ComponentFixture<ViewerLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerLessonComponent]
    });
    fixture = TestBed.createComponent(ViewerLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
