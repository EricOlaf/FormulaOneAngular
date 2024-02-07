import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCardLargeComponent } from './driver-card-large.component';

describe('DriverCardLargeComponent', () => {
  let component: DriverCardLargeComponent;
  let fixture: ComponentFixture<DriverCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverCardLargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
