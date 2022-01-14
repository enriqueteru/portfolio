import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { GridProyectComponent } from './components/grid-proyect/grid-proyect.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent,
    BannerComponent,
    GridProyectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],

  exports: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent,
    BannerComponent,
    GridProyectComponent

  ]
})
export class SharedModule { }
