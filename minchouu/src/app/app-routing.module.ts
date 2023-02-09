import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './copponent/home/home.component';
import {CartComponent} from './copponent/cart/cart.component';
import {ProductListComponent} from './copponent/product-list/product-list.component';
import {LoginComponent} from './copponent/login/login.component';
import {ReceiptComponent} from './copponent/receipt/receipt.component';
import {ProductDetailComponent} from './copponent/product-detail/product-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'receipt', component: ReceiptComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
