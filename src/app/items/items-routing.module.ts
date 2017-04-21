import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { ItemsSummaryComponent } from './items-summary/items-summary.component';

const itemRoutes: Routes = [
  { path: '', component: ItemsSummaryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ]
})
export class ItemsRoutingModule { }
