import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOwnersRegistrationComponent } from './business-owners-registration.component';

describe('BusinessOwnersRegistrationComponent', () => {
  let component: BusinessOwnersRegistrationComponent;
  let fixture: ComponentFixture<BusinessOwnersRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessOwnersRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessOwnersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
