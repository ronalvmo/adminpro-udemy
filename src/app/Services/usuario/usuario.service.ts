import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

    usuario: Usuario;
    token: string;

    constructor(public http: HttpClient) {
        console.log('Servicio de usuario Listo');

    }


    guardarStorage(id: string, token: string, usuario: Usuario) {
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        this.usuario = usuario;
        this.token = token;

    }

    loginGoogle(token: string) {
        let url = URL_SERVICIOS + '/login/google';

        return this.http.post(url, { token })
            .map((resp: any) => {
                this.guardarStorage(resp.id, resp.token, resp.usuario);
                return true;
            });


    }
    login(usuario: Usuario, recordar: boolean = false) {

        if (recordar) {
            localStorage.setItem('email', usuario.email);
        } else {
            localStorage.removeItem('email');
        }
        const url = URL_SERVICIOS + '/login';
        return this.http.post(url, usuario)
            .map((resp: any) => {
                this.guardarStorage(resp.id, resp.token, resp.usuario);
                return true;
            });

    }


    crearUsuario(usuario: Usuario, ) {
        const url = URL_SERVICIOS + '/usuario';

        return this.http.post(url, usuario)
            .map((resp: any) => {
                swal('usuario Creado', usuario.email, 'Success');
                return resp.usuario;
            });
    }

}
