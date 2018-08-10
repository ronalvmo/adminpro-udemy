import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class SubirArchivoService {


    constructor() { }

    subirArchivo(archivo: File, tipo: string, id: string) {
        return new Promise((resolve, reject) => {

            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append('imagen', archivo, archivo.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('imagen subida');
                        resolve(JSON.parse(xhr.response));
                    } else {
                        console.log('fallo la subida');
                        reject(JSON.parse(xhr.response));
                    }
                }
            };

            let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

            xhr.open('PUT', url, true);
            xhr.send(formData);

        });
    }
}
