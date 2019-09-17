import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Ng2TableModule } from 'ng2-table';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from '../pages/charts/charts.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    Ng2TableModule,
    FormsModule,
    ChartsModule,
    ButtonsModule.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class LoginModule { }
