import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignServiceCenterComponent} from './assign-service-center.component';

const routes: Routes = [
  {
    path: '',
    component: AssignServiceCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignServiceCenterRoutingModule {
}
