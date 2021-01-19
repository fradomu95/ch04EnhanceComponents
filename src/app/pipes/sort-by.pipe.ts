import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Hero[], arg: string, order: string): Hero[] {
    if (!value || order === '' || !order) { 
      return value; 
    }

    if (value.length <= 1) {
       return value; 
    }

    if (order === 'asc') {
      return value.sort((a:Hero , b:Hero) => {

        if(a[arg] > b[arg]) {
          return 1;
        } else if (a[arg] < b[arg]) {
          return -1;
        }

        return 0;
      });
    } else if (order === 'desc') {
      return value.sort((a:Hero , b:Hero) => {

        if(a[arg] < b[arg]) {
          return 1;
        } else if (a[arg] > b[arg]) {
          return -1;
        }

        return 0;
      });
    }

    return null;
  }
}
