import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PresupuestoRoutingModule } from './presupuesto.routing.module';



@NgModule({
  declarations: [
    PresupuestoComponent
  ],
  imports: [
    CommonModule, SharedModule, PresupuestoRoutingModule
  ],
  exports: [PresupuestoComponent]
})
export class PresupuestoModule { }
