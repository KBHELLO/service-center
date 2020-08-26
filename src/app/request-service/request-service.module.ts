import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestServiceRoutingModule} from './request-service-routing.module';
import {RequestServiceComponent} from './request-service.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [RequestServiceComponent],
  imports: [
    CommonModule,
    RequestServiceRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class RequestServiceModule {
}
