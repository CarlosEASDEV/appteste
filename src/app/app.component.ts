import { Component } from '@angular/core';
import { AppState, recuperaEstadoLista, retrievedHotelList } from './ngrx';
import { HoteisService } from './busca/busca.service';
import { Store, select } from '@ngrx/store';
import { Hotel } from './model/hoteis.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Busca';
  public hoteis : Observable<Array<Hotel>>;
  public mapEstadoLista : Map<number,boolean>;
  
  constructor(
    private hoteisService: HoteisService,
    private store: Store<{ hoteis: AppState}>
  ) {

      this.mapEstadoLista =  new Map<number,boolean>();
      this.hoteis = this.store.select('hoteis').pipe( map (e => e.hoteis));
      this.hoteis.forEach((item) => {
        item.forEach((hotel)=>{
          this.mapEstadoLista.set(hotel.id,false);
        })
      });

  }

  hoteis$ = this.store.select('hoteis').pipe( map (e => e.hoteis));


  ngOnInit() {
    
      //.subscribe((hoteis) => this.store.dispatch(retrievedHotelList()));

      this.store.dispatch(retrievedHotelList({lista : this.hoteisService
        .getHoteis()}));

      

      this.store.dispatch(recuperaEstadoLista({listaEstado : this.mapEstadoLista}));
  }
}
