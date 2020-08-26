import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'request-service',
      loadChildren: () => import('./request-service/request-service.module').then(m => m.RequestServiceModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'assign-center',
      loadChildren: () => import('./assign-service-center/assign-service-center.module').then(m => m.AssignServiceCenterModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'out-going',
      loadChildren: () => import('./out-going/out-going.module').then(m => m.OutGoingModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'in-office',
      loadChildren: () => import('./in-office/in-office.module').then(m => m.InOfficeModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'in-service-center',
      loadChildren: () => import('./in-service-center/in-service-center.module').then(m => m.InServiceCenterModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'complete',
      loadChildren: () => import('./complete/complete.module').then(m => m.CompleteModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'model-info',
      loadChildren: () => import('./model-info/model-info.module').then(m => m.ModelInfoModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'update-approval',
      loadChildren: () => import('./update-approval/update-approval.module').then(m => m.UpdateApprovalModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'service-center',
      loadChildren: () => import('./service-center/service-center.module').then(m => m.ServiceCenterModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'add-issue',
      loadChildren: () => import('./add-issue/add-issue.module').then(m => m.AddIssueModule),
      canActivate: [AuthGuard]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
