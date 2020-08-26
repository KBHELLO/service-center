import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';
import {ServiceCenter} from './service-center';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequest {

  private serviceRequest = Constant.APPROVAL_MODEL;

  constructor(private http: HttpClient) {
  }

  getServiceCenterModel(): Observable<ServiceCenter[]> {
    return this.http.get<ServiceCenter[]>(this.serviceRequest);
  }
}
