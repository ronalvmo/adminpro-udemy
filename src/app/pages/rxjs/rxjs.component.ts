import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    let obs = new Observable(observer => {
      let contador = 1;

      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
      }, 1000)
    });

    obs.subscribe(numero => {
      console.log('subs ',numero);
    });
  }

  ngOnInit() {
  }

}
