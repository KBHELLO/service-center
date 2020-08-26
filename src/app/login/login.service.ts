import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  getMobileNumber(url) {
    return this._http.get(url);
  }

  getOTP(data) {
    return this._http.post<any[]>(Constant.GET_OTP_URL,data);
  }

  verifyOTP(url) {
    return this._http.get<any>(url);
  }

}
