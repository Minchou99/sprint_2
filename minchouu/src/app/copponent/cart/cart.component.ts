import {Component, OnInit} from '@angular/core';
import {PaymentDto} from '../../model/payment/payment-dto';
import {PaymentService} from '../../service/payment.service';
import {TokeService} from '../../service/toke.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  paymentList: PaymentDto[];
  user: string[];
  userId: string;
  id: string[];
  form: FormGroup;
  paymentListId: number[] = [];
  checkedAll: boolean;
  sum = 0;
  total = 0;
  shipping = 49000;

  constructor(private paymentService: PaymentService,
              private tokenService: TokeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getUserId();
    this.getListPayment();
  }

  getUserId() {
    this.userId = this.tokenService.getUser();
    this.user = this.userId.split(',');
    this.id = this.user[0].split(':');
    console.log(this.id[1]);
  }

  getListPayment() {
    this.paymentService.getListPayment(this.id[1]).subscribe(data => {
      this.paymentList = data;
      this.paymentService.showSuccessMessage("Lấy danh sách thành công");
    });
  }

  cart() {
    this.getListPayment();
  }

  addAllToCart() {
    this.checkedAll = true;
    for (const value of this.paymentList) {
      if (!this.paymentListId.includes(value.paymentDetailId)) {
        this.checkedAll = false;
        break;
      }
    }
    if (this.checkedAll) {
      for (const value of this.paymentList) {
        const index = this.paymentListId.indexOf(value.paymentDetailId, 0);
        this.paymentListId.splice(index, 1);
      }
    } else {
      for (const value of this.paymentList) {
        const index = this.paymentListId.indexOf(value.paymentDetailId, 0);
        // tslint:disable-next-line:triple-equals
        if (index == -1) {
          this.paymentListId.push(value.paymentDetailId);
          console.log(value.paymentDetailId);
        }
      }
    }
    this.calculateMoney(this.paymentListId);
  }

  addToCart2(id: number) {
    console.log(id);
      const index = this.paymentListId.indexOf(id, 0);
      index > -1 ? this.paymentListId.splice(index, 1) : this.paymentListId.push(id);
      this.calculateMoney(this.paymentListId);

  }

  transferId() {
    this.paymentService.idArray = this.paymentListId;
  }

  calculateMoney(paymentListId: number[]) {
    let tempt = 0;
    for (const item of this.paymentList) {
      if (paymentListId.includes(item.paymentDetailId, 0)) {
        tempt += item.price;
      }
      console.log(this.paymentList);
      console.log(this.paymentListId);
    }
    this.sum = tempt;
    // tslint:disable-next-line:triple-equals
    if (this.sum == 0) {
      this.total = 0;
    } else {
      this.total = this.sum + 49000;
    }
  }

}
