import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/title/title.component';
import { FloatingComponent } from './components/floating/floating.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMenuMobileComponent } from './components/app-menu-mobile/app-menu-mobile.component';
import { RouterModule } from '@angular/router';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { SteperControllerComponent } from './components/steper-controller/steper-controller.component';
import { SteperComponent } from './components/steper/steper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollerGalComponent } from './components/scroller-gal/scroller-gal.component';
import { EmojisMadPusherComponent } from './components/emojis-mad-pusher/emojis-mad-pusher.component';

const c = [
  MainNavComponent,
  BannerComponent,
  TitleComponent,
  FloatingComponent,
  FooterComponent,
  AppMenuMobileComponent,
  MarqueeComponent,
  ClientListComponent,
  SteperControllerComponent,
  SteperComponent,
  ScrollerGalComponent,
  EmojisMadPusherComponent
];
@NgModule({
  declarations: [...c, ScrollerGalComponent, EmojisMadPusherComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [...c],
})
export class SharedModule {}
