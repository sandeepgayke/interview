import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  delsch: any;
  VenNo: any;
  selectvend: any;

  private transactionSource = new BehaviorSubject<object>({});
  currentTransaction = this.transactionSource.asObservable();

  private Users = new BehaviorSubject<boolean>(false);
  Username = this.Users.asObservable();
  User: any;
  UserName: any;
  matdisp: any;
  ASNDoc: any;

  constructor() { }
  
  changeTransaction(currentTransaction:object) {
    this.transactionSource.next(currentTransaction);
  }

  changeUser(status:boolean) {
    this.Users.next(status);
  }
  setAllVendorNo(VenNo) {
    this.VenNo = VenNo;
  }
  setASNDocById(ASNDoc){
   this.ASNDoc = ASNDoc
   console.log(this.ASNDoc)
  }
  getASNDocById(){
      return  this.ASNDoc 
     
   }
  setSelectedVendor(selectvend){
    this.selectvend = selectvend
  }
    setSelctedUser(User){
      this.User = User
    }

    getSelectedUser(){
      return this.User
    }
    getSelectedVendor(){
      return this.selectvend
      
    }

  getAllVendorNo() {
    return this.VenNo;
  }
  
  getAllDeliverySch() {
    return this.delsch;
  }

  setAllDeliverySch(delsch) {
    this.delsch = delsch;
  }
  setUserName(UserName){
    this.UserName =UserName
  }
  getUserName(){
    return this.UserName 
  }

  setAllMateialDispatch(matdisp){
    this.matdisp =matdisp
  }

  getMaterialDispatch(){
    return this.matdisp 
  }
}
