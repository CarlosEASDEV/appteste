import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import { Hotel } from '../model/hoteis.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent  {

  @Input()
  hoteis: Array<Hotel>;
  @Input()
  mapEstadoLista: Map<number,boolean>;
  @Output() add = new EventEmitter();

  //public resultado$:Observable<Array<any>>;
  public searchText = '';

  constructor(){
    this.hoteis = new Array<Hotel>();
    this.mapEstadoLista = new Map<number,boolean>();
  }
 
  exibeDetalhes(id : number){

    return this.mapEstadoLista.get(id);

  }

  mostraDetalhes(id : number){
    this.mapEstadoLista.set(id,true);
  }

  ocultarDetalhes(id : number){
    this.mapEstadoLista.set(id,false);
  }

  exibirModal(){

  }


}
