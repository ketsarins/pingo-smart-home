import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ThermostatListComponent } from './shared/thermostat-list/thermostat-list.component';


@NgModule({
  declarations: [DashboardComponent, AdminComponent, ThermostatListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
