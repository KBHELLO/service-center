import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServiceCenterComponent} from './service-center.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ServiceCenterComponent
  },
  {
    path: 'request-service',
    loadChildren: () => import('../request-service/request-service.module').then(m => m.RequestServiceModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'in-office',
    loadChildren: () => import('../in-office/in-office.module').then(m=>m.InOfficeModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCenterRoutingModule {
}
