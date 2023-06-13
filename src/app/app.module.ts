import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavdropDirective } from './shared/directives/navdrop.directive';
import { DashCardComponent } from './shared/components/dash-card/dash-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CardDesComponent } from './shared/components/card-des/card-des.component';
import { LoanIconComponent } from './shared/components/loan-icon/loan-icon.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RmShowDirective } from './shared/directives/rm-show.directive';
import { RmShow2Directive } from './shared/directives/rm-show-2.directive';
import { LogoDirective } from './shared/directives/logo.directive';
import { SitemDropDirective } from './shared/directives/sitem-drop.directive';
import { SerachElementPipe } from './shared/pipe/serach-element.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    NavdropDirective,
    DashCardComponent,
    CardDesComponent,
    LoanIconComponent,
    ChartComponent,
    UserTableComponent,
    CreateUserComponent,
    DashboardComponent,
    RmShowDirective,
    RmShow2Directive,
    LogoDirective,
    SitemDropDirective,
    SerachElementPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
