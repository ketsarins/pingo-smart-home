import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatListComponent } from './thermostat-list.component';

describe('ThermostatListComponent', () => {
  let component: ThermostatListComponent;
  let fixture: ComponentFixture<ThermostatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermostatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
