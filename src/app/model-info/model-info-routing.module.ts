import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModelInfoComponent} from './model-info.component';


const routes: Routes = [
  {
    path: '',
    component: ModelInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelInfoRoutingModule {
}
