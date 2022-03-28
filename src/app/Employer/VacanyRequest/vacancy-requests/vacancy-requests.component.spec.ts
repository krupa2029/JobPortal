import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRequestsComponent } from './vacancy-requests.component';

describe('VacancyRequestsComponent', () => {
  let component: VacancyRequestsComponent;
  let fixture: ComponentFixture<VacancyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
