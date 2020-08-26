import { Pipe, PipeTransform } from '@angular/core';
import {IssueMaster} from './issue-master';

@Pipe({
  name: 'searchIssue'
})
export class SearchIssuePipe implements PipeTransform {

  transform(issue: IssueMaster[],search:string): IssueMaster[] {
    if(!issue || !search)
      return issue;
    return issue.filter(issue =>
      issue.issue_details.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
