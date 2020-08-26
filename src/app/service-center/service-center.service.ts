import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';
import {Observable} from 'rxjs';
import {ServiceCenter} from '../request-service/service-center';

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {

  constructor(private http: HttpClient) {
  }

  getUnAssignedModelCount(): Observable<ServiceCenter[]> {
    return this.http.get<ServiceCenter[]>(Constant.GET_SERVICE_CENTER);
  }

  getApprovalModel() {
    return this.http.get<any>(Constant.APPROVAL_MODEL);
  }
}
