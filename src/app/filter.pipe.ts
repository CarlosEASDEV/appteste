import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './model/hoteis.model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  
  
  /**
   * Transform
   *
   * @param {Array<Hotel>} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: Array<Hotel>, searchText: string): any[] {

    
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.nome.toLocaleLowerCase().includes(searchText);
    });
  }
}