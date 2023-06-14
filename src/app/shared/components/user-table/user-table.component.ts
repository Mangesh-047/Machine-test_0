import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { TableDataService } from '../../services/table-data.service';
import { userInfo } from '../../model/table';
import { userTable } from '../../const/tableData';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  tableArray!: Array<userInfo>

  displayedColumns: string[] = ['position', 'name', 'userid', 'role'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  serachInput!: string;

  constructor(
    // private _tableService: TableDataService
  ) { }


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<userInfo>(userTable);
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    // this._tableService.getAllPost()
    //   .subscribe(res => {
    //     this.tableArray = res

    // console.log(this.tableArray);
    // console.log(res);


    //   console.log(this.dataSource);
    // })

    // this.dataSource = new MatTableDataSource<userInfo>(userTable);
    // this.dataSource.paginator = this.paginator;

  }

}


