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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaymentComponent } from './copponent/payment/payment/payment.component';
import { ReceiptComponent } from './copponent/receipt/receipt.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ProductDetailComponent } from './copponent/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductListComponent,
    LoginComponent,
    PaymentComponent,
    ReceiptComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
