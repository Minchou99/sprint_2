import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product/product';
import {environment} from '../../environments/environment';
import {Categoty} from '../model/product/categoty';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient,
              private toast: ToastrService) {
  }

  getListProduct(nameProduct, pageNumber: number): Observable<any> {
    return this.httpClient.get(environment.API_URL_PRODUCT + '/search?page=' + pageNumber + '&nameProduct=' + nameProduct);
  }

  getProductById(productId: string): Observable<any>{
    return this.httpClient.get(environment.API_URL_PRODUCT + '/find-by-id?id='+ productId);
  }

  getListCategory(): Observable<Categoty[]> {
    return this.httpClient.get<Categoty[]>(environment.API_URL_PRODUCT + 'category');
  }

  showSuccessMessage(message: string) {
    this.toast.success(message, 'Report', {
      timeOut: 2000,
      easing: 'ease-in',
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true
    });
  }

  showErrorMessage(message: string) {
    this.toast.error(message, 'Report', {
      timeOut: 2000,
      easing: 'ease-in',
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true
    });
  }
}
