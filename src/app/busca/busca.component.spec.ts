import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaComponent } from './busca.component';
import { Store } from '@ngrx/store';


describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ BuscaComponent ],
      providers: [
        { provide: Store }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
