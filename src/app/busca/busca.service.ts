import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from '../model/hoteis.model';

 
@Injectable({ providedIn: 'root' })
export class HoteisService {

  private listaHoteis: Array<any>;

  constructor(private http: HttpClient) {

      this.listaHoteis = [{
        id: 1,
        nome: 'Hotel 1',
        descricao: 'Hotel numero 1 com piscina e lareira'
      },{
        id: 2,
        nome: 'Hotel 2',
        descricao: 'Hotel numero 2 sem café da manhã'
      },{
        id: 3,
        nome: 'Hotel 3',
        descricao: 'Hotel bom e barato'
      },{
        id: 4,
        nome: 'Hotel Bela vista',
        descricao: 'Principal hotel da cidade'
      },{
        id: 5,
        nome: 'Hotel Ibis',
        descricao: 'Várias opções em várias cidades'
      }
    ];

  }
 
  getHoteis(): Array<Hotel> {
    return this.listaHoteis; 
    
    /*this.http
      .get<{ items: Hotel[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((hoteis) => hoteis.items || []));*/

      
  }

 

}