import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCardSmallComponent } from './driver-card-small.component';

describe('DriverCardSmallComponent', () => {
  let component: DriverCardSmallComponent;
  let fixture: ComponentFixture<DriverCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverCardSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
