import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'layout_0';

  isLoading!: boolean;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loadingStatus
      .subscribe(res => {
        console.log(res);
        this.isLoading = res
      })
  }
}
