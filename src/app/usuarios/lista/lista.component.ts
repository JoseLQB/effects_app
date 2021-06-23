import { Usuario } from './../../models/usuarios.model';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(public UsuarioService:UsuarioService) { }

  usuarios: Usuario[];

  ngOnInit() {
    this.UsuarioService.getUsers()
      .subscribe(users=>{
        console.log(users);
        this.usuarios = users;
      });
  }

}
