import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasosComponent } from './pages/casos/casos.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';



@NgModule({
  declarations: [
    CasosComponent,
    HomeComponent,
    BlogComponent,
    ContactoComponent,
    SobreMiComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
