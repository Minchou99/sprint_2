import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PaymentDto} from '../../model/payment/payment-dto';
import {TokeService} from '../../service/toke.service';
import {PaymentService} from '../../service/payment.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  idProduct: string;
  user: string[];
  userId: string;
  id: string[];
  paymentList: PaymentDto[];
  check = false;

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private tokenService: TokeService,
              private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idProduct = paramMap.get('id');
      this.productService.getProductById(this.idProduct).subscribe(data => {
        this.product = data;
        this.productService.showSuccessMessage('thanh cong');
      });
    });
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
    });
  }

  addToCart(productId: string) {
    this.paymentService.getListPayment(this.id[1]).subscribe(data => {
      if(!data){
        this.paymentService.addToCart(this.id[1], productId).subscribe( data => {
          this.check = false;
          this.paymentService.showSuccessMessage("Success");
        });
      }else {
        this.paymentList = data;
        this.paymentList.forEach(value => {
          if (value.productId == productId) {
            this.check = true;
            this.paymentService.showSuccessMessage("Product is exist");
          }
        });

        if (!this.check) {
          this.paymentService.addToCart(this.id[1], productId).subscribe( data => {
            this.check = false;
            this.paymentService.showSuccessMessage("Success");
          });
        } else {
          this.check = false;
        }
      }
    });
  }


}
