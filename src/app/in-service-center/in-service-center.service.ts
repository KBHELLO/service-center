import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';

@Injectable({
  providedIn: 'root'
})
export class InServiceCenterService {

  constructor(private _http: HttpClient) {
  }

  getInServiceCenterModel() {
    return this._http.get<any>(Constant.APPROVAL_MODEL);
  }

  confirmModel(model) {
    return this._http.put<any>(Constant.IN_SERVICE_CENTER_URL, model);
  }

  updateIssues(updateIssues){
    return this._http.post<any>(Constant.UPDATE_ISSUES_URL, updateIssues);
  }

}
