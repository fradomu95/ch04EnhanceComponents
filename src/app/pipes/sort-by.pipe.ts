import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Hero[], arg: string, order: string): Hero[] {


    // HE CREADO UN ARRAY AUXILIAR PARA CUANDO SE ORDENE LOS DATOS NO ME ALTERE EL ARRAY ORIGINAL, YA QUE DE OTRA FORMA SI ORDENABA EN UNA TABLA SE ME ORDENABA EN TODAS Y ADEMAS EN LOS DATOS ORIGINALES
    let aux: Hero[] = [];
    value.forEach(val => aux.push(Object.assign({}, val)));

    if (!value || order === '' || !order) { 
      return value; 
    }

    if (value.length <= 1) {
       return value; 
    }

    if (order === 'asc') {
      return aux.sort((a:Hero , b:Hero) => {

        if(a[arg] > b[arg]) {
          return 1;
        } else if (a[arg] < b[arg]) {
          return -1;
        }

        return 0;
      });
    } else if (order === 'desc') {
      return aux.sort((a:Hero , b:Hero) => {

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
