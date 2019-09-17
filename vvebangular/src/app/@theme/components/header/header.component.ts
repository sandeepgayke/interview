import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { ApiService } from '../../../service/api.service';
import { CommonService } from '../../../common.service';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  user: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
 
  accessibleVendors: any;
  // vendorno: any={};
  vendors:any={}
  date: any;
  Currentdate: any;
  lifnr: any={};
  selVendor: any={};
  openprofile: boolean=false;
  UserName: any={};

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private apiService: ApiService,
              private CommonService: CommonService,
              private router: Router,
              // private spinner:NgxSpinnerService
             
               ) 
              { 
                // this.subscribeToSpinner()
                // this.CurrentDate()
                // this.accessibleVendors =  JSON.parse(sessionStorage.getItem('vendors')); 
                // if(JSON.parse(sessionStorage.getItem('UserName'))!=null)
                //    this.UserName = JSON.parse(sessionStorage.getItem('UserName')); 
                //   console.log(this.UserName)
                   
                // this.CommonService.Username.subscribe(status =>{ 
                //  if(status)
                //   this.UserName = JSON.parse(sessionStorage.getItem('UserName')); 
                //   console.log(this.UserName) 
                // })
           
                // this.lifnr =  this.accessibleVendors[0].lifnr
                // this.selectVendor()

                // this.CommonService.currentTransaction.subscribe(transaction =>{ 
                //   console.log(transaction)
                
                //   this.lifnr =  transaction['lifnr']
                // })

                // this.subscribeToSpinner()
            }

  ngOnInit() {
    // setTimeout(() => {
     
    //   this.spinner.hide();
    // }, 5000);
   
  }
 
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
 
  Onchange(){
  this.selectVendor()
  }

  showLoader:boolean=false
  subscribeToSpinner() {
    this.apiService.APIStatus.subscribe(status => {
      if (status) this.showLoader= true;
      else this.showLoader= false;
    });
  }
selectVendor() {
  this.vendors.Currentdate=this.Currentdate
  this.vendors.lifnr=this.lifnr
  sessionStorage.setItem('selected_vendor',JSON.stringify( this.vendors));
  this.CommonService.changeTransaction(this.vendors);
}
  CurrentDate(){
    var d = new Date();
    var year = d.getFullYear();
    var m = new Date();
    var month = m.getMonth()
   this.Currentdate = year+"-"+("0"+(month+1))
  
  
  }
 
  // logout(){
    // this.router.navigate(['/login']);
    // window.location.logout();
   
  // }
  // getUserProfile(){
  //   this.router.navigate(['pages/login-user-profile']);
  // }
}
