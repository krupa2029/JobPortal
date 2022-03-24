import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailFormComponent } from './profile-detail-form.component';

describe('ProfileDetailFormComponent', () => {
  let component: ProfileDetailFormComponent;
  let fixture: ComponentFixture<ProfileDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
