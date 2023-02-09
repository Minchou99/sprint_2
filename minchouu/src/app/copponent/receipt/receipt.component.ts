import {Component, OnInit} from '@angular/core';
import {PaymentDto} from '../../model/payment/payment-dto';
import {ShipDescription} from '../../model/payment/ship-description';
import {PaymentService} from '../../service/payment.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {render} from 'creditcardpayments/creditCardPayments';
import {User} from '../../model/user/user';
import {TokeService} from '../../service/toke.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  idList: number[] = [];
  paymentList: PaymentDto[] = [];
  paymentBill: number | undefined;
  paypal: string;
  description: string;
  payments: ShipDescription[] = [];
  display = '';
  isShown: boolean = true;
  user: string[] = [];
  userId: string;
  id: string[];
  users: User;

  constructor(private paymentService: PaymentService,
              private formBuilder: FormBuilder,
              private router: Router,
              private toast: Title,
              private tokenService: TokeService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.toast.setTitle('Receipt');
    this.getUserId();
    this.idList = this.paymentService.getIdList();
    this.findPaymentList();
    this.getUser();
  }

  getUserId() {
    this.userId = this.tokenService.getUser();
    this.user = this.userId.split(',');
    this.id = this.user[0].split(':');
    console.log(this.id[1]);
  }

  getUser() {
    this.paymentService.findUser(this.id[1]).subscribe(data => {
      this.users = data;
    });
  }

  findPaymentList() {
    this.paymentService.findPaymentList(this.idList).subscribe(data => {
      this.paymentList = data;
      this.paymentBill = 49000;
      console.log(data);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.paymentBill += +data[i].price;
      }
      this.paypal = (this.paymentBill / 23000).toFixed(2);

      console.log(this.paypal);
      this.renderPayPalBtn();
    }, error => {
      this.paymentService.showErrorMessage('Do not get list payment');
    });
  }

  renderPayPalBtn() {
    document.getElementById('paypalBtn').innerHTML = '<div id="paypalButtons" style="margin-left: 300px"></div>';
    render(
      {
        id: '#paypalButtons',
        value: this.paypal.valueOf(),
        currency: 'USD',
        onApprove: (details) => {
          this.paymentService.showSuccessMessage('Payment success!');
          this.display = 'none';
          this.successPayment();
        }
      }
    );
  }

  successPayment() {
    for (const item of this.paymentList) {
      let shipDes = {
        'id': item.paymentDetailId,
        'shippingDescription': this.description
      };
      this.payments.push(shipDes);
    }
    this.paymentService.updateShipDescription(this.payments).subscribe(data => {
      this.paymentService.showSuccessMessage('Success');
      this.router.navigate(['/cart']).then(() => {
        location.reload();
      });
    }, error => {
      this.paymentService.showErrorMessage('Fail');
    });
  }

  changeDisplay() {
    this.isShown = false;
  }

  changeDisplay1() {
    this.isShown = true;
  }

}
