import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(events: any[], search: string): any {
    if(!events || !search) {
      return events;
    }
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return events.filter(event => JSON.stringify(event).toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
