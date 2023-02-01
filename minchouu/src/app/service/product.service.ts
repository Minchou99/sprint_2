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

  getListProduct(nameProduct, pageNumber: number): Observable<any> {
    return this.httpClient.get(environment.API_URL_PRODUCT + '/search?page=' + pageNumber + '&nameProduct=' + nameProduct );
  }

  getListCategory(): Observable<Categoty[]> {
    return this.httpClient.get<Categoty[]>(environment.API_URL_PRODUCT + 'category' );
  }
}
