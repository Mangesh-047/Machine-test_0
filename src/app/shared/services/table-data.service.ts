import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PeriodicElement } from '../model/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private _http: HttpClient) { }


  getAllPost(): Observable<Array<PeriodicElement>> {
    return this._http.get<PeriodicElement[]>(`${environment.baseUrl}/posts`)

  }
}
