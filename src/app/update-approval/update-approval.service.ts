import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';

@Injectable({
  providedIn: 'root'
})
export class UpdateApprovalService {

  constructor(private _http: HttpClient) { }

  getModel(){
    return this._http.get<any>(Constant.APPROVAL_MODEL);
  }
}
