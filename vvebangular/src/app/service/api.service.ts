import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  findGrnForExcel(selectedVendor: any) {
    throw new Error("Method not implemented.");
  }
    // baseUrl: any= 'http://68.183.93.137:3412';
    baseUrl: any;
    //  'http://localhost:3412'
   Url:any;
  // findGrnForExcel: any;

  constructor(private http: Http,  
    private httpClient: HttpClient,) { 
      this.baseUrl = environment.sereverBaseUrl
   
    }
    private APISource = new BehaviorSubject<boolean>(false);
    APIStatus = this.APISource.asObservable();
    changeAPISource(status:boolean){
      this.APISource.next(status);
    }
    private extractData(res: Response) {
     
      return res.json();
    }     

    private extracttext(res: Response) {
     console.log(res)
      return res.text();
    } 
  
    private handleError(error: any): Promise<any> {
     
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

    addRestaurant(data) {
      this.changeAPISource(true);        let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl+'/restaurants/addrest',data, options)
      .toPromise().then(response=> {  this.changeAPISource(false);  return this.extractData(response)}).catch(error=> {  this.changeAPISource(false); return this.handleError(error) });
    }


  getAllRestaurant(id) {
    this.changeAPISource(true);        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl+'/restaurants/getrestaurantlist/'+id,options).toPromise().then(response=> {  this.changeAPISource(false);  return this.extractData(response)}).catch(error=> {  this.changeAPISource(false); return this.handleError(error) });
  }

























































































































}
