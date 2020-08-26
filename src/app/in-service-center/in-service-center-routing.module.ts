import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InServiceCenterComponent} from './in-service-center.component';


const routes: Routes = [
  {
    path: '',
    component: InServiceCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InServiceCenterRoutingModule {
}
