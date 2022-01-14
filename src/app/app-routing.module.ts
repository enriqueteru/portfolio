import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Not404Component } from './core/not404/not404.component';
import { BlogComponent } from './pages/pages/blog/blog.component';
import { CasosComponent } from './pages/pages/casos/casos.component';
import { ContactoComponent } from './pages/pages/contacto/contacto.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SobreMiComponent } from './pages/pages/sobre-mi/sobre-mi.component';


  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'casos', component: CasosComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: '**', component: Not404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
