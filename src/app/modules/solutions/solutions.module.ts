import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SolutionsRoutingModule } from './solutions-routing.module';

@NgModule({
  declarations: [SolutionsComponent],
  imports: [CommonModule, SharedModule, SolutionsRoutingModule, SharedModule],
})
export class SolutionsModule {}
