import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCenterRoutingModule } from './service-center-routing.module';
import { ServiceCenterComponent } from './service-center.component';

@NgModule({
  declarations: [
    ServiceCenterComponent,
  ],
  imports: [
    CommonModule,
    ServiceCenterRoutingModule
  ]
})
export class ServiceCenterModule { }
