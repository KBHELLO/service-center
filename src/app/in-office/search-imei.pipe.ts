import {Pipe, PipeTransform} from '@angular/core';
import {ApproveModel} from '../out-going/ApproveModel';

@Pipe({
  name: 'searchImei'
})
export class SearchImeiPipe implements PipeTransform {

  transform(imei: ApproveModel[], search: string): ApproveModel[] {
    if (!imei || !search) {
      return imei;
    }
    return imei.filter(imei => imei.imei.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
