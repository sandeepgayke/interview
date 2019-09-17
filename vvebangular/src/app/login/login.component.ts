import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  user: any;
  isLoggingIn: boolean = false;
  WrongCredentials: boolean = false;
  vendorcount: any={};
  Users: any={};
  private User = new BehaviorSubject<object>({});
  selecteduser: any={};
  length: any;
  // Currentdate: any={};
  constructor(private router: Router,
    private apiService: ApiService,
    // private activeModal: NgbActiveModal,
    private CommonService: CommonService,
    private modalService: NgbModal,
    private toastr: ToastrService
  
  ) {
   
    this.user = {}

  }

  ngOnInit(): void {
  }

  login() {
    sessionStorage.setItem('token', '101010');
    this.router.navigate(['pages/dashboard']);
    // this.isLoggingIn = true;
    // console.log(this.user)
    // this.apiService.login(this.user).then(result => {
      
    //   this.length = result.vendors.length
    //   if (result.success == true) {
    //     this.toastr.success('Login Successfully');
    //     sessionStorage.setItem('token', '101010');
    //     this.selecteduser.UserName = this.user.username
    //     this.apiService.findUserByUserName(this.selecteduser).then(result=>{
    //       this.Users = result[0]
        
    //       this.user.UserType= this.Users.UserType

    //       sessionStorage.setItem('UserName', JSON.stringify(this.user));
    //       this.CommonService.changeUser(true)
    //       this.user = this.User.asObservable();   
    //     })
    //      this.apiService.getVendorCountByUsernames(this.user).then(result=>{
    //          this.vendorcount  =  result;
    //          sessionStorage.setItem('totalvendor', JSON.stringify(this.vendorcount));
    //         //  result.vendors.vendorcount = this.vendorcount
    //         //  console.log(this.vendorcount)
    //      })
         
    //     this.CommonService.setAllVendorNo(result.vendors);
    //     delete this.user.password
    //     this.CommonService.setUserName(this.user);
    //     sessionStorage.setItem('vendors', JSON.stringify(result.vendors));
    //           console.log(this.length) 
    //           if(this.length<2){
    //             this.router.navigate(['pages/dashboard']);
    //           }
    //           else{
    //             this.router.navigate(['pages']);
    //           }
        
    //    result.vendors.forEach((element,index) => {
    //      if(element.Users[index]==this.user.username)
    //          console.log("success") ;
           
    //          sessionStorage.setItem('username', JSON.stringify(this.user.username));
             
    //     });
    //   } else {
    //     this.toastr.error('Incorrect PassWord')
    //   }

    // }).catch(error =>  this.toastr.error('Incorrect PassWord'));

  }
  CurrentDate() {
    var d = new Date();
    var year = d.getFullYear();
    var m = new Date();
    var month = m.getMonth()
    //  this.Currentdate = year+"-"+month
    //  console.log(this.Currentdate)
    //  sessionStorage.setItem('todaydate',JSON.stringify(this.Currentdate));
  }

  keyDownLogin(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }
}
