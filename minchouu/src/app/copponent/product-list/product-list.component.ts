import {Component, OnInit} from '@angular/core';
import {Categoty} from '../../model/product/categoty';
import {Product} from '../../model/product/product';
import {Image} from '../../model/product/image';
import {ProductService} from '../../service/product.service';
import {PageProduct} from '../../dto/page-product';
import {TokeService} from '../../service/toke.service';
import {PaymentService} from '../../service/payment.service';
import {logger} from 'codelyzer/util/logger';
import {PaymentDto} from '../../model/payment/payment-dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Categoty[];
  product: Product[];
  image: Image;
  pageProduct: PageProduct | undefined;
  nameSearch = '';
  user: string[];
  userId: string;
  id: string[];
  paymentList: PaymentDto[];
  check = false;

  constructor(private productService: ProductService,
              private tokenService: TokeService,
              private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.getUserId();
    this.getListPayment();
    this.getListProduct();
  }

  getListProduct() {
    this.productService.getListProduct(this.nameSearch, 0).subscribe(productList => {
      console.log(productList);
      this.pageProduct = productList;
    });
  }

  getUserId() {
    this.userId = this.tokenService.getUser();
    this.user = this.userId.split(',');
    this.id = this.user[0].split(':');
    console.log(this.id[1]);
  }

  goToPage(i: number) {
    this.productService.getListProduct(this.nameSearch, i).subscribe(
      data => {
        this.pageProduct = data;
        console.log(data);
      });
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

  search() {
    this.getListProduct();
  }
}
