import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InOfficeComponent} from './in-office.component';


const routes: Routes = [
  {
    path: '',
    component: InOfficeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InOfficeRoutingModule {
}
