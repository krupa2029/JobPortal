import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRequestItemComponent } from './vacancy-request-item.component';

describe('VacancyRequestItemComponent', () => {
  let component: VacancyRequestItemComponent;
  let fixture: ComponentFixture<VacancyRequestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyRequestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
