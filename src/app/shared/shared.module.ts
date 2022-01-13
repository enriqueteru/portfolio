import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],

  exports: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent,
    BannerComponent

  ]
})
export class SharedModule { }
