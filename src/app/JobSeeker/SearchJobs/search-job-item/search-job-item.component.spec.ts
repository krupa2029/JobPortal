import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobItemComponent } from './search-job-item.component';

describe('SearchJobItemComponent', () => {
  let component: SearchJobItemComponent;
  let fixture: ComponentFixture<SearchJobItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJobItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
