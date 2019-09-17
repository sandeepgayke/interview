import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';
import { CommonService } from '../common.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
     
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  UserName;
    adminAccesibleUserTypes= ["admin1","admin2"]
    currentUserType
    menuArray : Array<NbMenuItem>
    menu=MENU_ITEMS;
  constructor(
    private CommonService: CommonService,
    ){

      this.CommonService.Username.subscribe(status => { 
        if(status) {
          this.UserName = JSON.parse(sessionStorage.getItem('UserName')); 
          JSON.parse(sessionStorage.getItem('UserName'));
          this.currentUserType=this.UserName.UserType;
      
          let UserTypeFound=false;
          this.adminAccesibleUserTypes.forEach(element => {
            if(this.currentUserType==element) {
              UserTypeFound=true;
            }
          })
          
          this.menuArray= MENU_ITEMS.filter(element => {
            if(!UserTypeFound)
               return  element.title!='Admin'
            else
              return true   
          })
        
          this.menu = this.menuArray;
        }
      })
  }

  
}
