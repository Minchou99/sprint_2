import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {Router} from '@angular/router';
import {TokeService} from '../../service/toke.service';
import {PaymentService} from '../../service/payment.service';
import {PaymentDto} from '../../model/payment/payment-dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;
  nameAccount: any;
  currentUser: User;
  accountRole: string;
  paymentList: PaymentDto[];
  user: string[];
  userId: string;
  id: string[];
  n: number;

  constructor(private tokenService: TokeService,
              private router: Router,
              private paymentService: PaymentService) {

  }

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.checkLogin = true;

      this.currentUser = JSON.parse(this.tokenService.getUser());
      console.log('hehhe' + this.currentUser);

      this.nameAccount = this.currentUser.lastName;
      console.log('tên' + this.nameAccount);
      const roles = this.tokenService.getRole();

      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === 'ROLE_ADMIN') {
          this.accountRole = 'ROLE_ADMIN';
        }
      }
    }
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
      if (!data) {
        this.n = 0;
      } else {
        this.n = this.paymentList.length;
      }
    });
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigateByUrl('home').then(() => {
      location.reload();
    });
  }
}
