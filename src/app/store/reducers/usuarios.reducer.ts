import { Usuario } from './../../models/usuarios.model';
import { cargarUsuarios, cargarUsuarioError, cargarUsuarioSuccess } from './../actions';
import { createReducer, on } from '@ngrx/store';


export interface UsuariosState { //1
  users: Usuario[],//TODO mirar esto
  loaded: boolean,
  loading: boolean,
  error: any
};

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null

};

export const _usuariosReducer = createReducer(usuariosInitialState,
  on(
    cargarUsuarios, (state) => ({...state, loading: true}),
  ),
  on(
    cargarUsuarioSuccess, (state, { usuarios })=>({ //el state tiene un objeto donde están los usuarios
      ...state,
      loading:false,
      loaded:true,
      users: [...usuarios]                         //desectructuración de los usuarios
    })
  ),
  on(
    cargarUsuarioError, (state, { payload })=>({ //payload que sería el error
      ...state,
      loading:false,
      loaded:false,
      error:payload
    })
  ),

);

export function usuariosReducer(state, action){
  return _usuariosReducer(state, action);
}
