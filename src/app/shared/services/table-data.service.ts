import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { userInfo } from '../model/table';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private _http: HttpClient) { }


  getAllPost(): Observable<Array<userInfo>> {
    return this._http.get<userInfo[]>(`${environment.baseUrl}/posts`)

  }
}
