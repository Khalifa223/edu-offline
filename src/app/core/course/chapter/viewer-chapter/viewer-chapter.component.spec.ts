import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerChapterComponent } from './viewer-chapter.component';

describe('ViewerChapterComponent', () => {
  let component: ViewerChapterComponent;
  let fixture: ComponentFixture<ViewerChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerChapterComponent]
    });
    fixture = TestBed.createComponent(ViewerChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
