import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IssueDetail} from './issue-detail';
import {Constant} from '../Helper/constant';
import {Solution} from './solution';
import {VendorCost} from './vendorCost';

@Injectable({
  providedIn: 'root'
})
export class AddIssueService {

  constructor(private _http: HttpClient) {
  }

  getMasterIssues(): Observable<IssueDetail[]> {
    return this._http.get<IssueDetail[]>(Constant.MASTER_ISSUE_URL);
  }

  getSolutionsOfIssue(url): Observable<Solution[]> {
    return this._http.get<Solution[]>(url);
  }

  getVendorOnSolution(data): Observable<VendorCost[]> {
    return this._http.post<VendorCost[]>(Constant.MASTER_SOLUTION_INSERT_URL, data);
  }

  newServiceRequest(data){
    return this._http.post(Constant.INSERT_UNASSIGNED_MODEL,data);
  }

}
