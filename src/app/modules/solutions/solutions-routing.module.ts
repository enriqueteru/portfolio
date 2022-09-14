import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsRoutingModule {}
