import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/usuarios/xxx';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }
    let tipos = ['usuario','hospital','medico'];
     let ruta = `${url}/${tipo}/${img}`;
     //console.log(ruta, 'ruta');
    /* switch (tipo) {
      case 'usuario':
        return url + '/usuario/' + img;
        break;
      case 'medico':
      return url + '/medico/' + img;
        break;
      case 'hospital':
        break;
    } */
    if (tipos.indexOf(tipo) < 0 ){
      //console.log(tipos.indexOf('sfdsf'), 'indexOf tipos');
      return url + '/usuarios/xxx';
    }

    //console.log(ruta, 'retorno ruta');
    return ruta;
  }

}
