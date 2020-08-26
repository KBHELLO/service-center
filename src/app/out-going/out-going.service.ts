import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';
import {Observable} from 'rxjs';
import {WaitingApproval} from './WaitingApproval';

@Injectable({
  providedIn: 'root'
})
export class OutGoingService {

  constructor(private _http: HttpClient) {
  }

  getApprovalModel() {
    return this._http.get<any>(Constant.APPROVAL_MODEL);
  }

  updateIssueStatus(issueId) {
    return this._http.post(Constant.UPDATE_ISSUE_STATUS, issueId);
  }

  updateConfirmRequest(requestJson) {
    return this._http.put<any>(Constant.UPDATE_CONFIRM_REQUEST, requestJson);
  }

  needApprovalModel(url): Observable<WaitingApproval []> {
    return this._http.get<WaitingApproval[]>(url);
  }

  newRequestApproval(data){
    return this._http.put<any>(Constant.UPDATE_ISSUE_STATUS,data);
  }
}
