import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './copponent/header/header.component';
import { FooterComponent } from './copponent/footer/footer.component';
import { HomeComponent } from './copponent/home/home.component';
import { CartComponent } from './copponent/cart/cart.component';
import { ProductListComponent } from './copponent/product-list/product-list.component';
import { LoginComponent } from './copponent/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
