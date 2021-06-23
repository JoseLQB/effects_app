
import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuarios.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuarioSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
    props<{usuarios: Usuario[]}>()//Estoy esperando un arreglo de usuarios
);

export const cargarUsuarioError = createAction(
  '[Usuarios] Cargar Usuarios Error',
    props<{payload:any}>()//Error que disparará el server
);
