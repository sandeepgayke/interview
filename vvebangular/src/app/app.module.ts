/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF, CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { ModalModule } from 'ngx-bootstrap';
import { RestaurantAddComponent } from './pages/restaurant/restaurant-add/restaurant-add.component';
import { RestaurantModule } from './pages/restaurant/restaurant.module';
// import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    LoginModule,
    ModalModule.forRoot(),
    RestaurantModule
    // UserIdleModule.forRoot({idle: 10, timeout: 600, ping: 7}),
  
    
    
    
  ],
  entryComponents:[RestaurantAddComponent],
  // providers: [BnNgIdleService],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  // providers: [
  //   { provide: APP_BASE_HREF,useValue: '/' },
  // ],
})
export class AppModule {
}
