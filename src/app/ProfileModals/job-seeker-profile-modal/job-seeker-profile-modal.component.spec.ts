import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileModalComponent } from './job-seeker-profile-modal.component';

describe('JobSeekerProfileModalComponent', () => {
  let component: JobSeekerProfileModalComponent;
  let fixture: ComponentFixture<JobSeekerProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
