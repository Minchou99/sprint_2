import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product/product';
import {environment} from '../../environments/environment';
import {Categoty} from '../model/product/categoty';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getListProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.API_URL_PRODUCT);
  }

  getListCategory(): Observable<Categoty[]> {
    return this.httpClient.get<Categoty[]>(environment.API_URL_CATEGORY);
  }
}
