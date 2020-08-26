import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InServiceCenterRoutingModule} from './in-service-center-routing.module';
import {InServiceCenterComponent} from './in-service-center.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InServiceCenterComponent],
  imports: [
    CommonModule,
    InServiceCenterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InServiceCenterModule {
}
