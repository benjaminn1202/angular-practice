import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDatePipe'
})
export class SortByDatePipePipe implements PipeTransform {

  transform(items: any[], dateField: string): any[] {
    if(!items) {
      console.log('No items to sort.');
      return items;
    } if(!dateField) {
      console.log('Invalid date, can\'t sort.');
      return items;
    }

    const sortedItems = [...items];

    sortedItems.sort((a, b) => {
      const dateA = new Date(a[dateField]);
      const dateB = new Date(b[dateField]);
      
      if(dateA < dateB) {
        return 1;
      } if(dateA > dateB) {
        return -1;
      }

      return 0;
    });

    return sortedItems;
  }

}
