import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InOfficeRoutingModule } from './in-office-routing.module';
import {InOfficeComponent} from './in-office.component';

@NgModule({
  declarations: [
    InOfficeComponent
  ],
  imports: [
    CommonModule,
    InOfficeRoutingModule,
  ]
})
export class InOfficeModule { }
