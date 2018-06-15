import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';


@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styles: []
})

export class IncrementadorComponent implements OnInit {

    @ViewChild('txtProgress') txtProgres: ElementRef;
    @Input('nombre') leyenda: string = 'Leyenda';
    @Input() progreso: number = 10;

    @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

    constructor() {


    }

    ngOnInit() {

    }

    onChanges(newvalue: number) {
        //let elemHTML: any = document.getElementsByName('progreso')[0];
        console.log(this.txtProgres);

        this.progreso = 0;

        if (newvalue < 0) {
            this.progreso = 0;
        } else if (newvalue > 100) {
            this.progreso = 100;
        } else {
            this.progreso = newvalue;
        }

        //        elemHTML.value = Number(this.progreso);
        this.txtProgres.nativeElement.value = this.progreso;

        this.cambioValor.emit(this.progreso);
    }

    cambiarValor(tipo: string) {
        if (this.progreso >= 0 && this.progreso <= 100) {
            if (tipo === '+') {
                this.progreso = this.progreso + 1;
                this.cambioValor.emit(this.progreso);
            }
            if (tipo === '-') {
                this.progreso = this.progreso - 1;
                this.cambioValor.emit(this.progreso);
            }
        }
        if (this.progreso < 0) {
            this.progreso = 0;
        }
        if (this.progreso > 100) {
            this.progreso = 100;
        }
        this.txtProgres.nativeElement.focus();
    }

}
