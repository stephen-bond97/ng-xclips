import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotListComponent } from './screenshot-list.component';

describe('ScreenshotListComponent', () => {
  let component: ScreenshotListComponent;
  let fixture: ComponentFixture<ScreenshotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
