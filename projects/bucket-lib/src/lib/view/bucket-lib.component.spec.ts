import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketLibComponent } from './bucket-lib.component';

describe('BucketLibComponent', () => {
  let component: BucketLibComponent;
  let fixture: ComponentFixture<BucketLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
