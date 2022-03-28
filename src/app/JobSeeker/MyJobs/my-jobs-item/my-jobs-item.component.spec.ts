import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobsItemComponent } from './my-jobs-item.component';

describe('MyJobsItemComponent', () => {
  let component: MyJobsItemComponent;
  let fixture: ComponentFixture<MyJobsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJobsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
