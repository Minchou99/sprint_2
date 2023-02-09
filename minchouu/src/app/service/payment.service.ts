import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {PaymentDto} from '../model/payment/payment-dto';
import {User} from '../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  idArray: number[];

  constructor(private httpClient: HttpClient,
              private toast: ToastrService) {
  }

  getIdList() {
    return this.idArray;
  }

  getListPayment(id: string): Observable<any> {
    return this.httpClient.get(environment.API_URL_PAYMENT + '/payment-list?userId=' + id);
  }

  addToCart(userId: string, productId: string): Observable<any> {
    return this.httpClient.get(environment.API_URL_PAYMENT + '/add-to-cart?userId=' + userId + '&productId=' + productId);
  }

  findPaymentList(idList: number[]): Observable<PaymentDto[]> {
    return this.httpClient.post<PaymentDto[]>(environment.API_URL_PAYMENT + '/find-by-list-id', idList);
  }

  findUser(userId: string): Observable<User>{
    return this.httpClient.get<User>(environment.API_URL_PAYMENT+ '/user?userId='+ userId);
  }

  updateShipDescription(payments: any[]): Observable<any> {
    return this.httpClient.post<any>(environment.API_URL_PAYMENT+ '/update', payments);
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
