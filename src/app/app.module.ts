import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';

import { StoreModule } from '@ngrx/store';
import { hoteisReducer } from './ngrx';
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      hoteis: hoteisReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
