import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppEmployeeComponent} from './app-employee/app-employee.component';
import {EmployeeComponent} from './employee/employee.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AppEmployeeComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
