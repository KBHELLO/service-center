import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';
import {Observable} from 'rxjs';
import {ServiceCenter} from '../request-service/service-center';

@Injectable({
  providedIn: 'root'
})
export class ModelInfoService {

  constructor(private _http: HttpClient) {
  }

  getModelDetails(): Observable<ServiceCenter[]> {
    return this._http.get<ServiceCenter[]>(Constant.APPROVAL_MODEL);
  }

}
