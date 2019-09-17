import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { Ng2TableModule } from 'ng2-table';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxPrintModule } from 'ngx-print';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [RestaurantComponent, RestaurantListComponent, RestaurantAddComponent],
  // entryComponents:[RestaurantAddComponent],
  // exports:[RestaurantAddComponent],
  // providers:[RestaurantAddComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    Ng2TableModule ,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ThemeModule,
    NgxPrintModule,
    NgxBarcodeModule,
    ToastrModule.forRoot(),
  ]
})
export class RestaurantModule { }
