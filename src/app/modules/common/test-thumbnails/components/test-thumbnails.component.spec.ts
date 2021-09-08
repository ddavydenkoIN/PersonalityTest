import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThumbnailsComponent } from './test-thumbnails.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TestThumbnailsComponent', () => {
  let component: TestThumbnailsComponent;
  let fixture: ComponentFixture<TestThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThumbnailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
