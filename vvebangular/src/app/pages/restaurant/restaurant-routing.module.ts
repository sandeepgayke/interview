import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [{
  path: '',
  component: RestaurantComponent,
  children: [
  
  // {
  //   path: 'asndocmst-item/:id',
  //   component: AsndlistItemComponent,
  // },
  // {
  //   path: 'new-asndocmst',
  //   component: NewAsndocmstComponent,
  // },
  // {
  //   path: 'dispatch-summary/:id',
  //   component: AsndocSummaryComponent,
  // },

],}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
