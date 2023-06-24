import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  // loginStatus: boolean = true;

  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService,
    private _authService: AuthService
  ) { }



  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {

    // if (this.loginStatus) {
    //     return true
    // } else {
    //     this._snackbarService.snackbarOpen(`please login to use our Services`)
    //     this._router.navigate(['/'])
    //     return false
    // }


    return this._authService.isAuthenticated()
      .then((loginStatus: Boolean) => {
        if (loginStatus) {
          // this._snackbarService.snackbarOpen('yes')
          // this._router.navigate(['/home'])
          return true;
        } else {
          this._snackbarService.snackbarOpen(`please login to use our Services`);
          this._router.navigate(['/'])

          return false;
        }
      });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    // return this._authService.isAuthenticated()
    //     .then((loginStatus: Boolean) => {
    //         if (loginStatus) {
    //             return true
    //         } else {
    //             this._snackbarService.snackbarOpen(`please login to use our Services`)
    //             this._router.navigate(['/'])

    //             return false
    //         }
    //     })

    return this.canActivate(childRoute, state)
  }
}
