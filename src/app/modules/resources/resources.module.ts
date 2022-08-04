import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResourcesComponent } from './pages/resources.component';
import { ResourcesRoutingModule } from './resources-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ResourcesRoutingModule],
  declarations: [ResourcesComponent],
})
export class ResourcesModule {}
