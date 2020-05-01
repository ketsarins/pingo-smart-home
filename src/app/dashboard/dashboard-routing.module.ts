import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ThermostatListComponent } from './shared/thermostat-list/thermostat-list.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'admin', // admin and child pages, /admin/thermostat-list, /admin/thermostat-list/create
      component: AdminComponent,
      canActivate: [AuthGuard],
      data: { roles: ['Admin']},
      children: [
        {
          path: '',
          children: [
            {
              path: 'thermostat-list', component: ThermostatListComponent
            }
          ]
        }
      ]
    },
    {
      path: 'thermostat-list', // Aparment owner pages, dashboard/thermostat-list
      component: ThermostatListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
