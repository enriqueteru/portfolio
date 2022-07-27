import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/title/title.component';
import { FloatingComponent } from './components/floating/floating.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMenuMobileComponent } from './components/app-menu-mobile/app-menu-mobile.component';
import { RouterModule } from '@angular/router';

const c = [
  MainNavComponent,
  BannerComponent,
  TitleComponent,
  FloatingComponent,
  FooterComponent,
  AppMenuMobileComponent,
];
@NgModule({
  declarations: [...c],
  imports: [CommonModule, RouterModule],
  exports: [...c],
})
export class SharedModule {}
