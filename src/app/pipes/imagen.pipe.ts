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
   let ruta = `${url}/${tipo}/${img}`;
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
    
    return ruta;
  }

}
