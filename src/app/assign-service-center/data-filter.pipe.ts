import { Pipe, PipeTransform } from '@angular/core';
import {Vendor} from './vendor';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(vendors: Vendor[], search: string): Vendor[] {
    if (!vendors || !search) {
      return vendors;
    }
    return vendors.filter(emp =>
      emp.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}
