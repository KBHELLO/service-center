import {Pipe, PipeTransform} from '@angular/core';
import {ServiceCenter} from '../request-service/service-center';

@Pipe({
  name: 'imeiSearch'
})
export class ImeiSearchPipe implements PipeTransform {

  transform(model: ServiceCenter[], search: string): ServiceCenter[] {
    if (!model || !search) {
      return model;
    }
    return model.filter(mod => mod.product_imei_1.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}
