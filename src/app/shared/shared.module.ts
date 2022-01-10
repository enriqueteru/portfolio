import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderNavComponent,
    FooterComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
