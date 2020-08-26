import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelInfoRoutingModule } from './model-info-routing.module';
import { ModelInfoComponent } from './model-info.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ModelInfoComponent],
  imports: [
    CommonModule,
    ModelInfoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModelInfoModule { }
