import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerQuizComponent } from './viewer-quiz.component';

describe('ViewerQuizComponent', () => {
  let component: ViewerQuizComponent;
  let fixture: ComponentFixture<ViewerQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerQuizComponent]
    });
    fixture = TestBed.createComponent(ViewerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
