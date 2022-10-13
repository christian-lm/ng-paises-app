import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>(); // Se exporta el evento del enter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';
  @Input() placeholder: string = '';

  // Se dispara solo cuando se crea el componente
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) // Solo emite valores en periodos de 300ms desde que se deja de teclear
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
    console.log(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
