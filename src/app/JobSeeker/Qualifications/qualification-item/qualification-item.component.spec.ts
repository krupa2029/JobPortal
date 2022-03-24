import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationItemComponent } from './qualification-item.component';

describe('QualificationItemComponent', () => {
  let component: QualificationItemComponent;
  let fixture: ComponentFixture<QualificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
