import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constant} from '../Helper/constant';
import {Observable} from 'rxjs';
import {Vendor} from './vendor';
import {ServiceCenter} from '../request-service/service-center';
import {IssueMaster} from './issue-master';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor(private http: HttpClient) {
  }

  getVendorList(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(Constant.GET_VENDOR_LIST);
  }

  getServiceCenterModel(): Observable<ServiceCenter[]> {
    return this.http.get<ServiceCenter[]>(Constant.GET_SERVICE_CENTER);
  }

  insertUnassignedModel(model_details) {
    return this.http.post<any>(Constant.INSERT_UNASSIGNED_MODEL, model_details);
  }

  getModelIssues(imei) {
    const fullUrl = Constant.GET_ISSUE_URL + '&imei=' + imei;
    return this.http.get<any>(fullUrl);
  }

  getPerviousIssues(imei) {
    const fullurl = Constant.GET_ISSUE_URL + '&imei=' + imei + '&issue_status=1';
    return this.http.get<any>(fullurl);
  }

  masterIssueSubmit(data) {
    return this.http.post(Constant.MASTER_ISSUE_URL, data);
  }

  getMasterIssue(): Observable<IssueMaster[]> {
    return this.http.get<IssueMaster[]>(Constant.MASTER_ISSUE_URL);
  }

  insertMasterSolution(data){
    return this.http.post(Constant.MASTER_SOLUTION_INSERT_URL, data);
  }

}
