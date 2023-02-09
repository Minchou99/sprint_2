import {Component, OnInit} from '@angular/core';
import {PaymentDto} from '../../../model/payment/payment-dto';
import {PaymentService} from '../../../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentList: PaymentDto[];
  userId: '';

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.getListPayment();
  }

  getListPayment() {
    this.paymentService.getListPayment(this.userId).subscribe(data => {
      this.paymentList = data;
    });
  }

  cart() {
    this.getListPayment();
  }

}
