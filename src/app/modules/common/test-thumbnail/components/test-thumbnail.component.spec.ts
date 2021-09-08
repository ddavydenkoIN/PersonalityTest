import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThumbnailComponent } from './test-thumbnail.component';

describe('TestThumbnailComponent', () => {
  let component: TestThumbnailComponent;
  let fixture: ComponentFixture<TestThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThumbnailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
