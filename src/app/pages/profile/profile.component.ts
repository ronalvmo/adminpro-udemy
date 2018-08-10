import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../Services/service.index';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {

    usuario: Usuario;

    imagenSubir: File;
    imagenTemp: string;


    constructor(public usuarioService: UsuarioService) {
        this.usuario = usuarioService.usuario;

    }

    ngOnInit() {
    }

    guardar(usuario: Usuario) {
        //  console.log(usuario);

        this.usuario.nombre = usuario.nombre;
        if (!this.usuario.google) {
            this.usuario.email = usuario.email;
        }
        this.usuarioService.actualizaUsurio(this.usuario)
            .subscribe();
    }

    seleccionImagen(archivo: File) {
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        if (archivo.type.indexOf('image') < 0) {
            swal('solo imagenes', 'el archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
        }

        this.imagenSubir = archivo;

        let reader = new FileReader();
        let urlImagenTemp = reader.readAsDataURL(archivo);

        reader.onloadend = () => this.imagenTemp = reader.result;
    }

    cambiarImagen() {
        this.usuarioService.CambiarImagen(this.imagenSubir, this.usuario._id);

    }



}
