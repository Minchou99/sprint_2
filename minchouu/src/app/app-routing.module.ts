import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './copponent/home/home.component';
import {CartComponent} from './copponent/cart/cart.component';
import {ProductListComponent} from './copponent/product-list/product-list.component';
import {LoginComponent} from './copponent/login/login.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'categori', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productList', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
