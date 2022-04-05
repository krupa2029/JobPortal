import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileModalComponent } from './employer-profile-modal.component';

describe('EmployerProfileModalComponent', () => {
  let component: EmployerProfileModalComponent;
  let fixture: ComponentFixture<EmployerProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
