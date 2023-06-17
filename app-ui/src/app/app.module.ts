import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { AppService } from './services/app.service';
import { GetaddressbycepComponent } from './components/getaddressbycep/getaddressbycep.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchcepComponent } from './components/searchcep/searchcep.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UpdateComponent } from './components/usuarios/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    GetaddressbycepComponent,
    SearchcepComponent,
    UsuariosComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
