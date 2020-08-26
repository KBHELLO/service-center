import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';

@Injectable({
  providedIn: 'root'
})
export class CompleteService {

  constructor(private _http: HttpClient) { }

  getCompleteModel(){
    return this._http.get<any>(Constant.APPROVAL_MODEL);
  }

  makeModelStock(url){
    return this._http.get<any>(url);
  }
}
