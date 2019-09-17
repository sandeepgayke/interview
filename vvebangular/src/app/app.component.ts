/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,private userIdle: UserIdleService,
    private router:Router
   ) {
   
  }

  ngOnInit(): void {
    // this.userIdle.startWatching();
    
    // // Start watching when user idle is starting.
    // this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // // Start watch when time is up.
    // this.userIdle.onTimeout().subscribe(() => 
    // this.router.navigate(['/login'])
    // // console.log('Time is up!')
    // );
 
    this.analytics.trackPageViews();
  }
}
