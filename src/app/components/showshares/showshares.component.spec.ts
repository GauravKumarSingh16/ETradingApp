import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsharesComponent } from './showshares.component';

describe('ShowsharesComponent', () => {
  let component: ShowsharesComponent;
  let fixture: ComponentFixture<ShowsharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
