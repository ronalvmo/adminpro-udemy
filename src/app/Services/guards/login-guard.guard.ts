import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  
  constructor(public usuarioService: UsuarioService,
              public router: Router){}
  
  canActivate(){
    if (this.usuarioService.estaLogueado()){
      console.log('Paso el Guard');
      return true;  
    } else {
      console.log('Bloqueado por el Guard');
      this.router.navigate(['/login']);
      return false; 
    }
    
  }
}
