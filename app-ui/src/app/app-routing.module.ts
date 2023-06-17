import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetaddressbycepComponent } from './components/getaddressbycep/getaddressbycep.component';
import { SearchcepComponent } from './components/searchcep/searchcep.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  {
    path:'',
    component: GetaddressbycepComponent
  },
  {
    path:'buscarcep',
    component: SearchcepComponent
  },
  {
    path:'usuarios',
    component: UsuariosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
