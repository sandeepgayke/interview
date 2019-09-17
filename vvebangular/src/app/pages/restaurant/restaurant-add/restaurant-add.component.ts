import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ApiService } from '../../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../common.service';

@Component({
  selector: 'ngx-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {
  detail: any = {};
 
  constructor(
  
    private CommonService: CommonService,
    private apiService: ApiService,
    private toastr: ToastrService,
    public modalService: BsModalService,
    public bsModalRef:BsModalRef
  ) {
    

    // this.CommonService.currentTransaction.subscribe(transaction =>{ 
     
    //   this.selectedVendor = transaction;
  
  
    // })
  
    // this.delsch = this.CommonService.getAllDeliverySch()
 


    // this.delsch.DelPlant = 1111;
    // this.delsch.DelStLoc = 1001; 
    // this.delsch.lifnr = this.selectedVendor.lifnr;
    // var date = new Date();

    // this.CurrentDate1 = date.toISOString().split("T")[0]
    // var time3 = this.CurrentDate1.split("-")
    // var time4 = time3[0]+"-"+time3[1]
   
    

    // // this.time = date.toISOString().split("T")[1]
    // this.time = date.toTimeString()
  
  

 
  
    
    // this.delsch.DelDocDt=this.CurrentDate1
  //   this.apiService.findItemDescription(this.delsch).then(result=>{
     
  //     this.delsch.BSVendor =  result[0].emlif
  //     console.log(result[0].bstyp)
  //     if(result[0].bstyp=="L"){
             
  //              this.add =  this.delsch.menge-this.delsch.total     
  //              console.log(this.add)
      
  //     }
  //     else{
         
         
  //         this.add=0   
  //       console.log(this.add)
       
  //     }
  // })
  

  }

  ngOnInit() {
  }

  

  
  
  submit(data) {
    this.apiService.addRestaurant(data).then(result=>{
      console.log(result)
      this.toastr.success('add');
      this.bsModalRef.hide()
    })
    // this.apiService.getLatestAsndocId().then(result => {
    //   this.ASNDOC = result[0];
    //   this.newASNDOCID = this.ASNDOC.ASNDocID
    //   var date = new Date();
    //   this.CurrentDate = date.toISOString().split("T")[0]
    //   this.ASNDocID = ++this.newASNDOCID
    //   if(this.add!=0){
      
    //     if(parseInt(this.delsch.DItemQty)<=parseInt(this.add)){
          
    //      this.create(delsch)
    //    }
 
    //    else{
        
    //      this.toastr.error('Your Remaining Limit Is Less than that quantity');
    //      // alert( this.delsch.DItemQty-this.add)
    //    }
    //   }
    //   else{
    //     this.create(delsch)
    //   }
     
     
    // })
  }

  data:any=[]
  create(delsch) {
 
 
  //   delete this.delsch.per
  //   delete this.delsch.status
  //   this.delsch.VendorNo = this.delsch.lifnr
  //   this.delsch.ASNDocDt = this.CurrentDate1 +" "+ this.time.substr(0,8)
  //  console.log(this.delsch.DelDocDt)
  //   if ((typeof this.delsch.DelDocDt) == 'object') {
  //     var date1 = new Date(this.delsch.DelDocDt)
  //     date1.setDate(date1.getDate())
  //     let splitDate = date1.toISOString().split("T")[0].split("-");
  //     var strdate = splitDate[0] + '-' + splitDate[1]+'-'+ splitDate[2]
  //     console.log(strdate)
  //     this.delsch.DelDocDt = strdate
  //   }
  //   else{
  //     this.delsch.DelDocDt = this.delsch.DelDocDt
  //   }
  //   this.delsch.ItemDesc = this.delsch.txz01
  //   this.delsch.Material = this.delsch.matnr
  //   this.delsch.PurOrdNo = this.delsch.ebeln
  //   this.delsch.POItemNo = this.delsch.ebelp
  //   delete this.delsch.lifnr
  //   delete this.delsch.eindt
  //   delete this.delsch.txz01
  //   delete this.delsch.matnr
  //   delete this.delsch.ebeln
  //   delete this.delsch.ebelp
  //   delete this.delsch.estkz
  //   delete this.delsch.menge
  //   delete this.delsch.wemng
  //   this.delsch.InMatAmt = null;
  //   this.delsch.InwardNo = null;
  //   this.delsch.InwardDt = null;
  //   this.delsch.DConfQty = null;
  //   this.delsch.DelCnfID = null;
  //   this.delsch.DelCnfDt = null;
  //   this.delsch.ASDocInd = "O";
  //   this.delsch.ASNDocID = this.ASNDocID;
 
  //  this.isenable=false
  //  var date = new Date();
  //  var s1:any =   date.toISOString().split("T")[0]
  //  var s2:any = s1.split("-")[0].toString()
  //  var s3:any = s1.split("-")[1]
  //  var s5:any = 1
  //  var s6:any = 1
  //  var s4:any=s2
  //  this.arr = [++s4+"-01",s4+"-02",s4+"-03",s2+"-04",s2+"-05",s2+"-06",s2+"-07",s2+"-08",
  //  s2+"-09",s2+"-10",s2+"-11",s2+"-12",]
  //  if(s3>3){
   
  //    for(var i =--s3;i>2;i--){
  //     s5++
  //      this.check.ASNDocDt = this.arr[i]
  //      this.check.VendorNo = this.selectedVendor.lifnr      
  //      this.check.DelDocNo = this.delsch.DelDocNo   
     
       
  //      this.apiService.findChallanno(this.check).then(result=>{
    
  //       if(result[0]==undefined){
  //          s6++
         
  //          if(s5==s6){
           
  //            delete this.delsch.ASNDocID
  //              console.log(this.delsch)
  //                         if(this.add!=0){
  //                               if(this.delsch.DItemQty<=this.add){
  //                                         this.apiService.AddAsndocmsts(this.delsch).then(result => {
                                           
  //                                         if (result.success == true) {

  //                                           this.toastr.success('Material Dispatch Order Added Successfully');
  //                                           this.bsModalRef.hide();
  //                                           this.isenable=false
  //                                         } else {
  //                                           this.toastr.error('Failed to add Material Dispatch Order111');
  //                                           this.isenable=false
  //                                         }
                                        
  //                                       }).catch(error => {
                                          
  //                                         this.toastr.error('Failed to add Material Dispatch Order');
  //                                         this.isenable=false
  //                                       }); 
  //                               }
  //                                   else
  //                                   {
                                  
  //                                     this.toastr.error('your delivery limit exceeded')
  //                                   }
  //                         }
  //                         else{
  //                           this.toastr.success('your delivery limit exceeded')
  //                               this.apiService.AddAsndocmsts(this.delsch).then(result => {
                            
  //                           if (result.success == true) {

  //                             this.toastr.success('Material Dispatch Order Added Successfully');
  //                             this.bsModalRef.hide();
  //                             this.isenable=false
  //                           } else {
  //                             this.toastr.error('Failed to add Material Dispatch Order111');
  //                             this.isenable=false
  //                           }
                          
  //                         }).catch(error => {
                         
  //                           this.toastr.error('Failed to add Material Dispatch Order');
  //                           this.isenable=false
  //                         }); 
  //                         }
  //                       }
          
           
  //       }
  //     })
     
  //    }
  //  }
  //    else{
  //      for(var i = --s3;i>=0;i--){
  //         this.check.ASNDocDt = this.arr[i]
  //         this.check.VendorNo = this.selectedVendor.lifnr 
        
  //        if(i==0){
  //          for(var j = 3;j<12;j++){
  //            this.check.ASNDocDt = this.arr[j]
            
  //          }
           
  //        }
         
  //      }
    //  }

    
     
 

  }
  // KeyPress(event){
  //   // console.log("hhh")
  //     // console.log(event.key)
  //     this.toastr.error('Please Select Date , Yor are not able to enter any Key');
  //     this.isenable=false
  // }

 
}
