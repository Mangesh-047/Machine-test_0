import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../model/table';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  tableArray!: Array<PeriodicElement>

  displayedColumns: string[] = ['position', 'name', 'userid', 'role'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  serachInput!: string;

  constructor(private _tableService: TableDataService) { }


  ngAfterViewInit() {

  }


  ngOnInit(): void {
    this._tableService.getAllPost()
      .subscribe(res => {
        this.tableArray = res

        // console.log(this.tableArray);
        // console.log(res);

        this.dataSource = new MatTableDataSource<PeriodicElement>(this.tableArray);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      })

  }

}


