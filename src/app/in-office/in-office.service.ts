import { Injectable } from '@angular/core';
import {Constant} from '../Helper/constant';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApproveModel} from '../out-going/ApproveModel';
import {WaitingApproval} from '../out-going/WaitingApproval';

@Injectable({
  providedIn: 'root'
})
export class InOfficeService {

  constructor(private _http: HttpClient) { }

  getApprovalModel(): Observable<ApproveModel []> {
    return this._http.get<ApproveModel[]>(Constant.APPROVAL_MODEL);
  }

  updateForOut(requestStatus){
    return this._http.put<any>(Constant.UPDATE_CONFIRM_REQUEST,requestStatus);
  }

  needApprovalModel(url): Observable<WaitingApproval []> {
    return this._http.get<WaitingApproval[]>(url);
  }

}
