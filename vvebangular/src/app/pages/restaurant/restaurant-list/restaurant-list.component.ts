import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { ExcelServiceService } from '../../../service/excel-service.service';
import { CommonService } from '../../../common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { RestaurantAddComponent } from '../restaurant-add/restaurant-add.component';

@Component({
  selector: 'ngx-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  paginatedMacdoc: any = [];
  totalItems: number;
  currentPage: number = 1;
  pageSize = 5;
  currentStartIndex = 1;
  currentEndIndex;
  bsModalRef: BsModalRef;
  noOfPages: any = [1, 2,3,4,5,6,7,8,9,10];

  CurreantMonth: any;
  year: string;
  date: string;
  Selectedyear: string;
  Currentyear: number;
  Currentdate: any;
  selectedVendor: any;


  TotalRecords: any;
  constructor(
    private router: Router,
    private apiservice: ApiService,
  
    private CommonService: CommonService,
    private modalService:BsModalService,
  ) {
  
      this.getRestaurantList(0)
    
  }


  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentEndIndex = endItem;
   // this.currentStartIndex = startItem;
    this.doPagination(startItem, endItem);

  }

  doPagination(start, end) {

    this.paginatedMacdoc = this.paginatedMacdoc.slice(start, end);
  }


  getRestaurantList(pages) {
    // this.selectedVendor.Currentdate = this.Currentdate
 
    this.apiservice.getAllRestaurant(parseInt(pages)).then(result => {
      this.paginatedMacdoc = result;
   console.log(this.paginatedMacdoc)
      this.loadTable(0, 5);
    })
  }

  loadTable(start, end) {
    this.loadData();
    this.length = this.data.length;
    this.onChangeTable(this.config);
    this.totalItems = this.paginatedMacdoc.length;
    this.doPagination(start, end);
  }



pages:any=5
 

 


  fetchPage(pages) {
    console.log(pages)
    this.getRestaurantList(pages-1)
  }

  loadNextPageGroup() {
    if (this.TotalRecords > this.currentStartIndex) {
      this.currentStartIndex += 10;
      this.noOfPages = []
      for (let i = 0; i < 10; i++)
        this.noOfPages[i] = this.currentStartIndex + i
    }
  }


  loadPrevPageGroup() {
     
    if (1 < this.currentStartIndex) {
     
      this.currentStartIndex -= 10
      this.noOfPages = []
      for (let i = 0; i < 10; i++)
        this.noOfPages[i] = this.currentStartIndex +  i
    }
  }


  ngOnInit() {

  }




  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'RestaurantID', name: 'rest_id', sort: 'asc' },
    { title: 'Restaurant Name', name: 'rest_name' },
    { title: 'City', name: 'rest_city' },
    { title: 'State', name: 'state' },
   

  ];

  loadData() {
    this.data = [];
    this.paginatedMacdoc.forEach(matdoc => {
 
      var person = {
        'rest_id': matdoc.rest_id,
        'rest_name': matdoc.rest_name,
        'rest_city': matdoc.rest_city,
        'state': matdoc.rest_state,
    
      };
      this.data.push(person);
    });

  }

  

  public page: number = 1;
  public itemsPerPage: number = 5;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  data: Array<any> = [];

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name] != undefined && item[column.name].toString().toLowerCase().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
   
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {

    var id = data.row.id != undefined ? data.row.id : '1';
    this.router.navigate(['dashboard/branches/branch-summary', id]);
  }


 
  matexcel:any
  data1:any={}
  mat:any=[]
  my:any=[]
 
 

  OpenWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Create New ' ,
      class: 'modal-lg',
      animated: true,
      keyboard: true,
      ignoreBackdropClick: true
    };
    // this.delsch = this.CommonService.getAllDeliverySch()
    this.bsModalRef = this.modalService.show(RestaurantAddComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

      this.modalService.onHide.subscribe((reason: string) => {
   
        this.getRestaurantList(0)

    })
  }

}
